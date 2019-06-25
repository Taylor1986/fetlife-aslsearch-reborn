import pandas as pd

import glob
import xlrd
import csv


import_path = 'Import\\'
export_path = 'Export\\'


# filename storage + define column sheet
excel_names = ['columns.xlsx']

files = [f for f in glob.glob(import_path + "**/*.xlsx", recursive=True)]

for f in files:
	excel_names.append(f)
	print(f)

# read them in
excels = [pd.ExcelFile(name) for name in excel_names]

# turn them into dataframes
frames = [x.parse(x.sheet_names[0], header=None,index_col=None) for x in excels]

# delete the first row for all frames except the first
# i.e. remove the header row -- assumes it's the first
frames[1:] = [df[1:] for df in frames[1:]]

# concatenate them..
combined = pd.concat(frames)

# write it out
combined.to_excel(export_path + "fetlifemerged.xlsx", header=False, index=False)


# Results go to the default directory if not assigned somewhere else.
# C:\Users\Excel\.spyder-py3



def csv_from_excel():
    wb = xlrd.open_workbook(export_path + 'fetlifemerged.xlsx')
    sh = wb.sheet_by_name('Sheet1')
    your_csv_file = open(export_path + 'fetlifemerged.csv', 'w', newline='', encoding='utf-8')
    wr = csv.writer(your_csv_file, quoting=csv.QUOTE_ALL)

    for rownum in range(sh.nrows):
        wr.writerow(sh.row_values(rownum))

    your_csv_file.close()

# runs the csv_from_excel function:
csv_from_excel()