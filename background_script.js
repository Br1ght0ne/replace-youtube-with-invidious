browser.webRequest.onBeforeRequest.addListener(
    request => {
        let url = request.url.replace(/(www\.)?youtu(\.be|be\.com)/, 'invidio.us');
        console.log("Redirecting " + request.url + " to " + url)
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://www.youtube.com/*",
            "*://youtu.be/*"
        ]
    },
    ["blocking"]
);
