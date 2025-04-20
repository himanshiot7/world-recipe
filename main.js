if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log(' Service Worker Registered'))
      .catch(err => console.error(' Registration failed:', err));
  }
  let box = document.getElementById('box');
let pos = 0;

function moveBox() {
  pos += 2;
  box.style.left = pos + 'px';
  if (pos < window.innerWidth - 50) {
    requestAnimationFrame(moveBox);
  }
}

moveBox(); 

  