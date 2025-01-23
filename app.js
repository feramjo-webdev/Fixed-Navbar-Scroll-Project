// ********** set date ************
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  //   linksContainer.classList.toggle('show-links');

  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  //   console.log('scroll height: ', scrollHeight);
  //   console.log('nav height: ', navHeight);

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function (scrollLink) {
  scrollLink.addEventListener('click', function (e) {
    // prevent default behaviour
    e.preventDefault();

    const elementToScrollToId = e.currentTarget.getAttribute('href').slice(1);
    // console.log(elementToScrollToId);

    const elementToScrollTo = document.getElementById(elementToScrollToId);
    // console.log(elementToScrollTo);

    // calculating the nav element and links container heights
    const navHeight = navbar.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;

    let positionToScrollTo = elementToScrollTo.offsetTop - navHeight;

    const fixedNav = navbar.classList.contains('fixed-nav');

    if (!fixedNav) {
      positionToScrollTo = positionToScrollTo - navHeight;
    }

    if (navHeight > 82) {
      positionToScrollTo = positionToScrollTo + linksContainerHeight;
    }

    window.scrollTo({
      left: 0,
      top: positionToScrollTo,
    });

    linksContainer.style.height = 0;
  });
});
