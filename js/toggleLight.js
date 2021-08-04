window.addEventListener('load', () => {
  let btn = document.querySelector('#toggleBtn');
  let light = document.querySelector('#light');

  btn.addEventListener('click', ({ target }) => {
    target.classList.toggle('btnActive');
    light.classList.toggle('lightOn');
  });
});
