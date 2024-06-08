chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const tabId = sender.tab.id;
  if (request.btnOn) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["appOn.js"]
    });
  } else {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["appOff.js"]
    });
  }
});