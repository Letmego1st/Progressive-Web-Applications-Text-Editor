const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile
  // Stash the event so it can be triggered later.
  event.preventDefault();
  deferredPrompt = event;
  installButton.style.display = "block";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {});
event.preventDefault();
// Show the install prompt

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});
