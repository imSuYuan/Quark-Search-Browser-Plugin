chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
      for (var i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === 'User-Agent') {
          details.requestHeaders[i].value = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 QuarkPC/1.1.0.11';
          break;
        }
      }
      return {requestHeaders: details.requestHeaders};
    },
    {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"]
    
  );
  chrome.runtime.onStartup.addListener(function() {
    chrome.tabs.create({url: "https://123.quark.cn/"});
  });
  