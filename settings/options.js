function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    instance: document.querySelector("#instance").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#instance").value = result.instance || "invidio.us";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get("instance");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
