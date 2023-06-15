const butInstall = document.getElementById("buttonInstall");

let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile
  // Stash the event so it can be triggered later.
  event.preventDefault();
  window.deferredPrompt = event;
  console.log("deferredPrompt: ", window.deferredPrompt);
  butInstall.classList.toggle("hidden", false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const pEvt = window.deferredPrompt;

  if (!pEvt) {
    return;
  }

  pEvt.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("JATE was installed.", event);
  window.deferredPrompt = null;

});
