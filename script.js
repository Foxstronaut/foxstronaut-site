//Hello World, Git is SCAWYYY
const initialWindowPositions = {};
const mainIframe = document.querySelector('.mainif'); // Get the iframe element

function toggleApp(appId) {
  const appWindow = document.getElementById(appId);
  appWindow.classList.toggle('active');

  if (appWindow.classList.contains('active')) {
    // Reset to the initial centered position
    appWindow.style.left = initialWindowPositions[appId].left;
    appWindow.style.top = initialWindowPositions[appId].top;
  }
}
function openApp(appId) {
  const appWindow = document.getElementById(appId);
  appWindow.classList.add("active");

  if (appWindow.classList.contains('active')) {
    // Reset to the initial centered position
    appWindow.style.left = initialWindowPositions[appId].left;
    appWindow.style.top = initialWindowPositions[appId].top;
  }
}

// Store initial positions
document.addEventListener('DOMContentLoaded', () => {
  const appWindows = document.querySelectorAll('.app-window');
  appWindows.forEach(appWindow => {
    initialWindowPositions[appWindow.id] = {
      left: appWindow.style.left || '50%',
      top: appWindow.style.top || '50%'
    };
  });

  //if loaded open about
  setTimeout(() => {
    openApp('app3');
    let name = prompt("Welcome to My Website! What's Your Name?");
    alert("Well Hello There " + name + "! Thanks for Visiting");
  }, 5000);
});