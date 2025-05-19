let activeTab = "";
let startTime = 0;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  handleTabSwitch(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    handleTabSwitch(tab.url);
  }
});

function handleTabSwitch(url) {
  const now = Date.now();
  if (activeTab) {
    const timeSpent = (now - startTime) / 1000;
    sendDataToServer(activeTab, timeSpent);
  }
  activeTab = url;
  startTime = now;
}

function sendDataToServer(url, timeSpent) {
  const productive = isProductive(url);

  fetch('http://localhost:3000/api/data', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, timeSpent, productive })
  });
}

function isProductive(url) {
  return url.includes("github") || 
         url.includes("stackoverflow") || 
         url.includes("geeksforgeeks") || 
         url.includes("w3schools") || 
         url.includes("hackerrank") || 
         url.includes("leetcode");
}
