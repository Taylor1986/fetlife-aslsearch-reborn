import pandas as pd
import glob
import xlrd
import csv
import re

# Be aware: CD to the right dir first!

# Define the Import and Export folder
# Needs changing when used with Linux
import_path = 'Import\\'
export_path = 'Export\\'

# Removes HTML tags when called


def remove_html_tags(data):
    p = re.compile(r'<.*?>')
    return p.sub('', data)

# Removes lone linebreaks (without /r) when called


def remove_n_without_r(data):
    p = re.compile(r'(?<!\r)\n')
    return p.sub('', data)


# filename storage + define column sheet, put it first in filelist
excel_names = ['columns.xlsx']

# Search for xlsx files in the import folder and add them to the filelist
print("Importing XLSX...")
files = [f for f in glob.glob(import_path + "**/*.xlsx", recursive=True)]

for f in files:
    excel_names.append(f)
    # uncomment to enable listing of imported files
    # print(f)

# read them in
excels = [pd.ExcelFile(name) for name in excel_names]

# turn them into dataframes
frames = [x.parse(x.sheet_names[0], header=None, index_col=None)
          for x in excels]

# delete the first row for all frames except the first
# i.e. remove the header row -- assumes it's the first
print("Cleaning XLSX...")
frames[1:] = [df[1:] for df in frames[1:]]

# Check every row for HTML and linebreaks
# Remove them due to corrupting the CSV later on
for df in frames:
    for col in df:
        for i, row_value in df[col].iteritems():
            try:
                df[col][i] = remove_html_tags(df[col][i])
                df[col][i] = remove_n_without_r(df[col][i])

            except TypeError:
                # Not everything is a string, just skipt if so
                ...
            if col == "user_id":
                print("triggered")
                df[col][i] = df[col][i].astype(float)  


print("Merging XLSX...")
# concatenate them..
combined = pd.concat(frames)

print("Exporting XLSX...")
# write it out
combined.to_excel(export_path + "fetlifemerged.xlsx",
                  header=False, index=False)


# Take XLSX and turn it into CSV
def csv_from_excel():
    wb = xlrd.open_workbook(export_path + 'fetlifemerged.xlsx')
    sh = wb.sheet_by_name('Sheet1')
    your_csv_file = open(export_path + 'fetlifemerged.csv',
                         'w', newline='', encoding='utf-8')
    wr = csv.writer(your_csv_file, quoting=csv.QUOTE_MINIMAL)

    for rownum in range(sh.nrows):
        wr.writerow(sh.row_values(rownum))

    your_csv_file.close()


print("Converting XLSX to CSV...")
# runs the csv_from_excel function:
csv_from_excel()

print("Creating SQL file...")

openFile = open(export_path + 'fetlifemerged.csv', 'r', encoding="utf8")
csvFile = csv.reader(openFile)
header = next(csvFile)
headers = map((lambda x: '`'+x+'`'), header)
insert = 'INSERT IGNORE INTO import (' + ", ".join(headers) + ") VALUES "
with open(export_path + "fetlifemerged.sql", "w", encoding="utf8") as sql_file:
    with open("sql_start.sql") as sql_start:
        for line in sql_start:
            if "ROW" in line:
                sql_file.write(line) 
    for row in csvFile:
      values = map((lambda x: '"'+x+'"'), row)
      print (insert +"("+ ", ".join(values) +");", file=sql_file)
    with open("sql_end.txt") as sql_end:
        for line in sql_end:
            if "ROW" in line:
                sql_file.write(line) 
openFile.close()

print("Finished!")
