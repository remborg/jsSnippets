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
toggleClass = function (element, className) {
    if(hasClass(element, className))
    {
        removeClass(element, className);
    }
    else
    {
        addClass(element, className);
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
/**
 * throttle a function
 * @param {function} func: function to call
 * @param {number} delay: in ms between each call
 * @param {boolean} leading: call the function ont the first throttle event
 * @param {boolean} trailing: call the function on the last throttle event
 */
throttle2 = function(func, wait, leading, trailing) {
    var result;
    var timeout = null;
    var previous = 0;

    return function() {
        var now = new Date();

        if (!previous && !leading) {
            previous = now;
        }

        var remaining = wait - (now - previous);

        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.call();
        } else if (!timeout && trailing) {
            timeout = setTimeout( function () {
                            previous = new Date();
                            timeout = null;
                            result = func.call();
                        }, remaining);
        }

        return result;
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
},
repaintElement = function(element) {
    element.style.display = 'none';
    element.offsetHeight;
    element.style.display = '';
};