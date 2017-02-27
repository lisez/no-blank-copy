/* *********************************************
 * @license
 * Copyright (c) 2017-Present lisez <mm4324@gmail.com>
 * All rights reserved. This code is governed by a BSD-style license
 * that can be found in the LICENSE file.
 ***********************************************/

// remove \r, \n, \s, \t by regexp
function getNoBlankText(el){
	return el.replace(/[\r\n\t]/gi, '').replace(/\s{2,}/, '').trim();
}

// create a virtual element and select all for copy
function executeCopy(el){
	// create a virtual element
	var tmpArea = document.createElement('textarea');
	document.body.appendChild(tmpArea);
	tmpArea.value = el;

	// focus it and select text 
	tmpArea.focus();
	tmpArea.select();

	// copy that
	document.execCommand('copy');

	// remove the virtual element
	tmpArea.remove();
}

// create a context menu
chrome.runtime.onInstalled.addListener(function(){
	chrome.contextMenus.create({
		title: chrome.i18n.getMessage('menuTitle'),
		id: 'no-wrap-blank-menu',
		contexts: ['selection']
	});
});

// trigger function
chrome.contextMenus.onClicked.addListener(function(info, tab){
	if(info.menuItemId === 'no-wrap-blank-menu'){
		var term = getNoBlankText(info.selectionText);
		executeCopy(term);
	}
});