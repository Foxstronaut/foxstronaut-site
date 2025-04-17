const initialWindowPositions = {};
const mainIframe = document.querySelector('.mainif'); // Get the iframe element

function toggleApp(appId) {
  const appWindow = document.getElementById(appId);
  appWindow.classList.toggle('active');
//.. Draggable Shizz
    //draggable shizz no workyyy
//.. End Draggable Shizz
  if (appWindow.classList.contains('active')) {
    // Reset to the initial centered position
    appWindow.style.left = initialWindowPositions[appId].left;
    appWindow.style.top = initialWindowPositions[appId].top;
  }
}
// these 2 little shits do the same exact fucking thing
// because one fucking function kept closing the app window
// if I was faster than it, don't complain, it works.
// 
// with love,
// -your friendly neighborhood web dev
//
//P.S. WHY THE FUCK DOES DRAGGABLE STUFF DO WIERD THINGS

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
    let name = prompt("Welcome to My Website! What's Your Name?");
    if (name == null){
      console.log("ooh an anonymous user");
    }
    else{
      alert("Well Hello There " + name + "! Thanks for Visiting");
      openApp('app3');
    }
  }, 5000);
});