const injectedScript = document.createElement('script');
injectedScript.src = chrome.extension.getURL('lib.js');
(document.head || document.documentElement).appendChild(injectedScript);
