/* *********************************************
 * @license
 * Copyright (c) 2017-Present lisez <mm4324@gmail.com>
 ***********************************************/

 // remove \r, \n, \s, \t by regexp
function getNoBlankString(el){
	return el.replace(/\s/gim, '').trim();
}