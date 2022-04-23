"use strict";
var messages = [
    { id: 1, type: 'image', sendMessage: '1111' },
    { id: 2, type: 'audio', sendMessage: '2222' },
    { id: 3, type: 'audio', sendMessage: '3333' },
    { id: 4, type: 'audio', sendMessage: '4444' },
];
function getMessage(value, readCount) {
    if (readCount === void 0) { readCount = 1; }
    if (typeof value === 'number') {
        return messages.find(function (item) { return item.id === value; });
    }
    else {
        return messages.filter(function (item) { return item.type === value; }).splice(0, readCount);
    }
}
console.log(getMessage(1));
console.log(getMessage('audio', 2));
console.log(getMessage(1).id);
