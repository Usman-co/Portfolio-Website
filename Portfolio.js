document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".container");

  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100) &&
      elementBottom >= 0
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // Initial check in case elements are already in view
  handleScrollAnimation();
});



document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".content-about");

  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100) &&
      elementBottom >= 0
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // Initial check in case elements are already in view
  handleScrollAnimation();
});


document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".scroll-element");
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100) &&
      elementBottom >= 0
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("visible");
  };

  const handleScrollAnimation = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop < lastScrollTop) {
      // Scrolling up
      scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // Initial check in case elements are already in view
  handleScrollAnimation();
});



var _CONTENT = [
    "Frontend Development",
    "Backend Development",
    "WordPress Development",
    "Web Designing",
    "E-Commerce Development",
    "Web Development"
];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector(".text");
var _CURSOR = document.querySelector(".cursor");

// typing effect
function Type() {
    var text = " " + _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    if (text === " " + _CONTENT[_PART]) {
        // hide the cursor
        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    } else {
        // show the cursor
        _CURSOR.style.display = 'inline-block';
    }
}

// deleting effect
function Delete() {
    var text = " " + _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    if (text === ' ') {
        clearInterval(_INTERVAL_VAL);

        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;

        _PART_INDEX = 0;
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}
_INTERVAL_VAL = setInterval(Type, 100);



document.addEventListener('DOMContentLoaded', function () {
  // Menu toggle functionality
  const menu = document.getElementById('menu');
  const navbar = document.querySelector('.navbar');

  menu.addEventListener('click', function () {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('nav-toggle');
  });

  // Scroll and load events
  window.addEventListener('scroll', handleScrollLoad);
  window.addEventListener('load', handleScrollLoad);

  function handleScrollLoad() {
      menu.classList.remove('fa-times');
      navbar.classList.remove('nav-toggle');

      const scrollTopButton = document.querySelector('#scroll-top');
      if (window.scrollY > 60) {
          scrollTopButton.classList.add('active');
      } else {
          scrollTopButton.classList.remove('active');
      }

      // Scroll spy functionality
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.navbar ul li a');
      sections.forEach(function (section) {
          let height = section.offsetHeight;
          let offset = section.offsetTop - 200;
          let top = window.scrollY;
          let id = section.getAttribute('id');

          if (top > offset && top < offset + height) {
              navLinks.forEach(function (link) {
                  link.classList.remove('active');
              });
              document.querySelector(`.navbar a[href="#${id}"]`).classList.add('active');
          }
      });
  }

  // Smooth scrolling
  const smoothScrollLinks = document.querySelectorAll('a[href*="#"]');
  smoothScrollLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth'
          });
      });
  });
});