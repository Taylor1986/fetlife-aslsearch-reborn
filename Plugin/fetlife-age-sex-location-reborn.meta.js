/**
 * This is a Tempermonkey script and must be run using a Tempermonkey-compatible browser.
 *
 * @author ornias1993 <kjeld@schouten-lebbing.nl>
 */
// ==UserScript==
// @name		   FetLife ASL Search (Reborn Edition)
// @version		0.6.0
// @namespace	  https://github.com/Ornias1993/fetlife-aslsearch-reborn
// @downloadURL	  https://github.com/Ornias1993/fetlife-aslsearch-reborn/raw/master/fetlife-age-sex-location-reborn.user.js
// @updateURL	  https://github.com/Ornias1993/fetlife-aslsearch-reborn/raw/master/fetlife-age-sex-location-reborn.meta.js
// @description	Allows you to search for FetLife profiles based on age, sex, location, and role.
// @require		https://code.jquery.com/jquery-2.1.4.min.js
// @include		https://fetlife.com/*
// @exclude		https://fetlife.com/adgear/*
// @exclude		https://fetlife.com/chat/*
// @exclude		https://fetlife.com/im_sessions*
// @exclude		https://fetlife.com/polling/*
// @grant		  GM_log
// @grant		  GM_xmlhttpRequest
// @grant		  GM_addStyle
// @grant		  GM_getValue
// @grant		  GM_setValue
// @grant		  GM_deleteValue
// @grant		  GM_openInTab
// ==/UserScript==


//This file is only meant to make checking for updates lighter on the client.
//Instead install: https://github.com/Ornias1993/fetlife-aslsearch-reborn/raw/master/fetlife-age-sex-location-reborn.user.js