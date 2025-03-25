"use strict";

/**
 * Додає два числа
 * @param {String} contect 
 * @param {String} padding 
 * @param {String} border 
 * @returns {String} 
 */
function getElementWidth(contect, padding, border) {
    contect = Number(contect.replace('px', ''));
    padding = Number(padding.replace('px', ''));   
    border = Number(border.replace('px', ''));
    return contect + padding * 2 + border * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200