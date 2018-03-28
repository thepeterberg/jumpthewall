// Copyright (c) 2018 Peter Berg. All rights reserved.
// Use of this source code is governed by a license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Unblocking ' + tab.url + ' for you!');
  chrome.tabs.executeScript(null, {file: "unblock.js"});

/* chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  }); */
  
});
