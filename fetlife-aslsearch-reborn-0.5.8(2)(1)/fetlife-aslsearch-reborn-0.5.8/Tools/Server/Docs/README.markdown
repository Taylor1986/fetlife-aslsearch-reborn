# FetLife Age/Sex/Location Search (Reborn Edition)
[![GitHub last commit](https://img.shields.io/github/last-commit/ornias1993/fetlife-aslsearch-reborn.svg)](https://github.com/ornias1993/fetlife-aslsearch-reborn/commits/develop) [![Krihelimeter](http://www.krihelinator.xyz/badge/ornias1993/fetlife-aslsearch-reborn)](http://www.krihelinator.xyz/repositories/ornias1993/fetlife-aslsearch-reborn)[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
<br>
![built-with-resentment](http://forthebadge.com/images/badges/built-with-resentment.svg) ![contains-technical-debt](http://forthebadge.com/images/badges/contains-technical-debt.svg)

The FetLife Age/Sex/Location Search user script allows you to search for profiles on [FetLife](https://fetlife.com/) by age, sex, location, sexual role, sexual orientation, profile bio (a user's "About Me" section), listed fetishes, what they've entered for "Looking For," and much, much more. This user script implements and then extends what is, as of this writing, the [most popular suggestion in the FetLife suggestion box](https://fetlife.com/improvements/78):

> Search for people by Location/Sex/Orientation/Age
>
> Increase the detail of the kinkster search by allowing us to narrow the definition of the search by the traditional fields.

With the FetLife Age/Sex/Location Search user script installed, a few clicks will save hours of time. Now you can find profiles that match your specified criteria in a matter of seconds. The script even lets you send a message to the profiles you found right from the search results list.

**This edition of the FetLife A/S/L Search script is an enhanced, extended version with full support for all genders and designed in a way that makes it immune to FetLife's recent automatic banhammer.**

<a href="https://www.buymeacoffee.com/Xr9O4jc" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

FetLife A/S/L Search (Reborn Edition) is the easiest, fastest, and *safest* way to search profiles on FetLife. It's ad-free and free-of-charge. The code is open source and the service is maintained solely by donations. If you like this script, [consider donating](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SW2KSKTYMY686&source=url) to support me in making continued improvements. But even if you don't donate, you'll still be able to use every feature, forever, 'cause that's how I roll.



## System requirements

The following software must be installed on your system before installing the FetLife Age/Sex/Location Search user script.

### Mozilla Firefox

If you use the [Mozilla Firefox](http://getfirefox.com/) web browser (version 12.0 or higher), ensure you have the [Tampermonkey extension](https://addons.mozilla.org/nl/firefox/addon/tampermonkey/) installed (at version 1.0 or higher).

### Google Chrome

If you use the [Google Chrome](https://chrome.google.com/) web browser (version 23 or higher), ensure you have the [Tampermonkey extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) installed.

## Installing

To install FetLife Age/Sex/Location Search, There are multiple options:

1. Go to [the SleazyFork.org page for FetLife Age/Sex/Location Search Reborn](https://sleazyfork.org/en/scripts/385261-fetlife-asl-search-reborn-edition), and click "Install". Install the plugin.

2. Go to [GitHub.com Releases](https://github.com/Ornias1993/fetlife-aslsearch-reborn/releases) and copy the content to a new "Tamper Monkey" script.

3. Use the direct link on [GitHub.com](https://github.com/Ornias1993/fetlife-aslsearch-reborn/raw/master/fetlife-age-sex-location-search.user.js), this should open a Tampermonkey popup. Click install.

In all cases you might/will get a warning from tampermonkey when you open fetlife for the first time after installing the plugin. Please accept the warning using a "Always Allow" option.

## Using

To use FetLife Age/Sex/Location Search, [log in to your FetLife.com account](https://fetlife.com/login) and click the "A/S/L?" checkbox in the top navigation bar, near the Search box.

![Screenshot of modified FetLife toolbar with the "A/S/L?" add-on installed.](http://i.imgur.com/h3Ahsvg.png)

The "Extended A/S/L search" tab will appear:

![Screenshot of the "Extended A/S/L search" tab with all its panels closed.](http://i.imgur.com/1eOGxC0.png)

In the "Extended A/S/L search" tab, there are four panels that you can open to modify your search criteria. You can ignore any panel you don't care about. Clicking a panel name will expand it to reveal the options within. For example, clicking on "Search by Age/Sex/Location" will allow you to select search criteria for age, gender/sex, location, sexual orientation, and/or sexual role. Click on the "Help" buttons to the right of any option or panel to view a pop-over with additional instructions. Clicking anywhere outside the pop-over will close the help text again.

![Screenshot of help text explaining how to choose an age range.](http://i.imgur.com/dizoig6.png)

To expand the search interface, click the "Enlarge" button at the top-left of the FetLife A/S/L Search options. The button will move to the top-left of your browser window, the search interface will expand to fit the available space, and the button's text will change to "Close FetLife A/S/L Search." Clicking on it again will return you to the FetLife page you were browsing.

When you've selected your search criteria, click "Search." The search panels will disappear and a progress bar will appear. When the progress bar turns green, the first batch of your search request is complete and you will be presented with a sortable table that displays profile avatars, nicknames, and any other account information relevant to your search. To view additional information about a profile, click the green plus button (+) to the left of the user's nickname.

![Screenshot of search result.](http://i.imgur.com/V5ywl32.png)

Due to the sheer number of profiles FetLife A/S/L Search (Reborn) is able to search and the speed with which it can do so, results are both batched and paged. If your search query returns many results, you will see a pagination control at the bottom of the search results table that will allow you to page through the batch. You can also filter the batch using the "Filter results batch" text field at the top-right of the table. After the first result batch is presented to you, the "Search" button becomes a "Show batch number 2" button. Clicking on it again requests the second batch from your  search.

To start a new search, click the "Reset" button.

## FAQ
Our frequently Asked Questions reside on our [Wiki](https://github.com/Ornias1993/fetlife-aslsearch-reborn/wiki/FAQ)

## Changelog
Our Changelog also resides on our [Wiki](https://github.com/Ornias1993/fetlife-aslsearch-reborn/wiki/Change-log)
