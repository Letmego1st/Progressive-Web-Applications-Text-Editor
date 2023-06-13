const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile
  // Stash the event so it can be triggered later.
  event.preventDefault();
  deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {});
event.preventDefault();
deferredPrompt.prompt();
const { outcome } = await deferredPrompt.userChoice;
console.log(`User response to the install prompt: ${outcome}`);
deferredPrompt = null;
installButton.style.display = "none";

// Show the install prompt
console.log("JATE was installed.", event);


// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});
console.log("JATE was installed.", event);

