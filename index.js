// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

// tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('is-active'));
    tab.classList.add('is-active');

    const target = tab.dataset.target;
    tabContentBoxes.forEach(box => {
      if (box.getAttribute('id') === target) {
        box.classList.remove('is-hidden');
      } else {
        box.classList.add('is-hidden');
      }
    })
  })
})

//Scrollspy

// INSERT JAVASCRIPT HERE!
// In-view function
const handleView = item => {
  const linkEl = document.querySelector(`#link-${item}`);
    
  let offsetHeight = 0.6*(window.innerHeight)
  inView.offset({
    bottom:offsetHeight
  });
  
  inView(`#${item}`)
    .on("enter", () => linkEl.classList.add('is-active'))
    .on("exit", el  => linkEl.classList.remove('is-active'))
};

// Apply method on each DOM element 
["one", "two", "three", "four", "five", "six"].forEach(handleView);