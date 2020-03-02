const browser = chrome;

const redirect = request => {
  let instance = browser.storage.sync.get("instance", obj => obj);
  let url = request.url.replace(
    /(www\.)?youtu(\.be|be\.com)/,
    instance || "invidio.us"
  );
  return { redirectUrl: url };
};

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: ["*://www.youtube.com/*", "*://youtu.be/*"] },
  ["blocking"]
);
