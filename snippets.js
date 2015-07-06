var hasClass = function (element, className) {
    return (" " + element.className + " ").indexOf(" " + className  + " ") > -1;
},
addClass = function (element, className) {
    if (!hasClass(element, className)){
        element.className += " " + className;
    }
},
removeClass = function (element, className) {
    if (hasClass(element, className)){
        element.className = trim((" " + element.className + " ").replace(" " + className + " ", ""));
    }
},
trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');
},
getIndexInArray = function (item, array) {
    var i;
    for(i = 0; i < array.length; i++ )
    {
        if(item === array[i]){
            return i;
        }
    }
    return -1;
},
throttle = function(limit, callback) {
    var wait = false;
    return function (){
        if (!wait) {
            callback.call();
            wait = true;
            setTimeout(function () {
                wait = false;
            }, limit);
        }
    };
},
getScrollXY = function() {
    var pos = {'X':undefined, 'Y':undefined};
    if( typeof( window.pageYOffset ) === 'number'){
        pos.X = window.pageXOffset;
        pos.Y = window.pageYOffset;
    } else {
        pos.X = document.body.scrollLeft || document.documentElement.scrollLeft;
        pos.Y = document.body.scrollTop || document.documentElement.scrollTop;
    }
    return pos;
};