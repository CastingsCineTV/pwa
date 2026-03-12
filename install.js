let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
e.preventDefault();
deferredPrompt = e;

const installBtn = document.createElement("button");
installBtn.innerText = "📲 Instalar App";
installBtn.style.position="fixed";
installBtn.style.bottom="20px";
installBtn.style.right="20px";
installBtn.style.zIndex="9999";

document.body.appendChild(installBtn);

installBtn.addEventListener("click", () => {
deferredPrompt.prompt();
deferredPrompt.userChoice.then(() => {
deferredPrompt = null;
});
});
});
