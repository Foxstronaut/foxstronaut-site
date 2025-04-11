const initialWindowPositions = {};
const mainIframe = document.querySelector('.mainif'); // Get the iframe element (though not used for dragging anymore)

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

//if loaded open about
window.onload = function() {
  setTimeout(() => {
    openApp('app3');
    let name = prompt("Welcome to My Website! What's Your Name?");
    alert("Well Hello There " + name + "! Nice to Meet You.");
  }, 5000);
};

