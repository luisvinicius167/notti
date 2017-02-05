# notti

[![npm package](https://img.shields.io/badge/npm-v0.0.5-lightgray.svg)](https://www.npmjs.com/package/notti)

> Don't make me think - Dead simple user notification.

---

<p align="center">
  <img src="https://cdn.rawgit.com/luisvinicius167/notti/master/img/notti.gif" width="400"/>
</p>

[notti Website ➞](https://notti.surge.sh/)

## Why should you use notti?
 * Tiny size: 2.2kb
 * No external CSS dependency
 * No jQuery dependency
 * Fully customizable

#### Install

Npm: `npm install notti` </br>
CDN: `https://unpkg.com/notti@0.0.5`


#### The Gist:

```javascript
import { notti } from 'notti';

notti('Hello User!');

notti({
  // HTML Element
  message: '<strong>Hello!</stong> User',
  isHTML: true,
  style : {
    backgroundColor: '#333',
    color:'#fff',
    bottom: '10px',
    right: '10px'
  },
  onHide: () => {
    console.log('Awesome notti.js!')
  }
});
```

### API

```javascript
/**
 * @name notti
 * type Function
 * @description Show an notification
 * @param {String || Object } The message or customizable Object
 */

 notti('Hi Folks!');
 
 // or
 const customizable = {
   message: 'Hi folks',
   style: {
     backgroundColor: '#333',
     color: '#fff',
     top: '10px',
     right: '10px',
   }
 }

 notti(customizable);
```


Customizable params

```javascript
/**
  * @param {String} message The notification message
  * @param {Object} style Customizable style
  * @param {Boolean} autoHide Auto hide the notification box
  * @param {Boolean} hideOnClick Hide the notification when clicked
  * @param {Boolean} isHTML If the message string contains HTML Element
  * @param {Integer} delay The notification hide delay time
  * @param {Function} onHide The Function that will be called when the notification disappear
  **/

  const config = {
    // required
    message: 'Hi Folks' || '<p>Hi <span class="username">Folks</span></p>',
    // just true if your message contains HTML Element
    isHTML: false, //default
    //optional
    style:  {}, //default
    //optional
    autoHide:  true, //default
    //optional
    hideOnClick: true, //default
    //optional
    delay:  2000, //default
    //optional
    onHide: ()=>{console.log('Awesome notti.js')}
  }
```