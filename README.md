# object-grep-chrome-extension

A Chrome extension that adds the grep method to the object prototype. Based
on [object-grep](https://github.com/ulitcos/object-grep) tool.

## install

Сlone to your machine:

```bash
git clone https://github.com/ulitcos/object-grep-chrome-extension.git
```

Install extension into chrome ([source](https://developer.chrome.com/extensions/getstarted#manifest)):

- Open the Extension Management page by navigating to chrome://extensions.
- Enable Developer Mode by clicking the toggle switch next to Developer mode.
- Click the LOAD UNPACKED button and select the extension directory.

## usage

The grep method will be embedded in `object.prototype`, so you can call it on any object

```javascript
const obj = {a: {b: {c: 'd'}}}

obj.grep('b') // => {inKeys: {'a.b': {c: 'd'}}, inValues: {}}
```

More examples [here](https://github.com/ulitcos/object-grep#usage)
and [here](https://github.com/ulitcos/object-grep/blob/master/tests/test.js)
