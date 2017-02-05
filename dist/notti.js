var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * notti library
 * @param data {String || Object } The message text or the object customization
 * 
 * Customizing
 * @param {String} data.message The message
 * @param {Boolean} data.isHTML If the message is an HTML Element
 * @param {Object} data.style
 * @param {Boolean} data.dismissOnClick Dismiss the notification on click :default true
 * @param {Boolean} data.autoDismiss Auto dismiss the notification :default true
 * @param {Integer} data.delay The delay time that the notification will be dismissed
 */
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = {
      notti: factory
    };
  } else {
    root.notti = factory;
  }
})(this, function (global) {
  var notti = function notti(data) {
    if (typeof data !== 'string') {
      data.autoDismiss = data.autoDismiss === undefined ? true : data.autoDismiss;
      data.dismissOnClick = data.dismissOnClick === undefined ? true : data.dismissOnClick;
    }
    var div = document.createElement('div');
    div.id = 'notti';

    var defaultStyle = {
      minWidth: '180px',
      opacity: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40px',
      backgroundColor: '#fff',
      color: '#333',
      borderRadius: '5px',
      border: '1px solid #ddd',
      transition: 'all .5s ease-in',
      position: 'absolute',
      top: '20px',
      right: '20px',
      cursor: 'pointer',
      width: 'auto',
      padding: '10px'
    };

    if (data.style) {
      defaultStyle = _extends(defaultStyle, data.style);
    }

    Object.keys(defaultStyle).forEach(function (property) {
      div.style[property] = defaultStyle[property];
    });

    if (typeof data === 'string' || data.dismissOnClick) {
      div.addEventListener('click', function (e) {
        div.style.transitionDuration = '500ms';
        div.style.transitionTimingFunction = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        div.style.opacity = '0.5';
        setTimeout(function () {
          div.style.opacity = '0';
          div.parentNode.removeChild(div);
        }, data.delay / 10 || 300);
      });
    }

    if (typeof data === 'string' || data.autoDismiss) {
      setTimeout(function () {
        div.style.transitionDuration = '500ms';
        div.style.transitionTimingFunction = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        div.style.opacity = '0.5';
        setTimeout(function () {
          div.style.opacity = '0';
          if (document.querySelector('#notti') !== null) {
            div.parentNode.removeChild(div);
          }
        }, data.delay / 10 || 300);
      }, data.delay || 2000);
    }

    if (data.isHTML) {
      div.innerHTML = data.message;
    } else {
      div.textContent = typeof data === 'string' ? data : data.message;
    }
    document.body.appendChild(div);
  };

  return notti;
}(this));
//# sourceMappingURL=notti.js.map
