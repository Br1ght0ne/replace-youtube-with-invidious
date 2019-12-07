const saveOptions = async e => {
  e.preventDefault();
  await browser.storage.sync.set({
    instance: document.querySelector("#instance").value
  });
};

const restoreOptions = async () => {
  let { instance } = await browser.storage.sync.get("instance");
  document.querySelector("#instance").value = result.instance || "invidio.us";
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
