/* *********************************************
 * @license
 * Copyright (c) 2017-Present lisez <mm4324@gmail.com>
 * All rights reserved. This code is governed by a BSD-style license
 * that can be found in the LICENSE file.
 ***********************************************/
 
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
		var term = getNoBlankString(info.selectionText);
		executeCopy(term);
	}
});