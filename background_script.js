const redirect = async request => {
  let { instance } = await browser.storage.sync.get("instance");
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
