const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // Prevent Chrome 67 and earlier from automatically showing prompt
    event.preventDefault();

    // Stash event so it can be triggered later
    window.deferredPrompt = event;

    // Update UI notify user can add to home screen
    butInstall.style.display = 'block';
  });

// Implement click event handler on `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    // console.log(promptEvent)
    if (!promptEvent) return;

    // Show the prompt
    promptEvent.prompt();

    // Wait for user to respond prompt
    const { outcome } = await promptEvent.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    // if can't use prompt again, discard it
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
  });

// Add handler for `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed');
    window.deferredPrompt = null;
  });