var _CONTENT = [
    "Frontend Development",
    "Backend Development",
    "Web Designing",
    "Android Development",
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

 // JavaScript to autoplay the carousel
 document.addEventListener("DOMContentLoaded", function() {
    // Get the carousel element
    var carouselElement = document.getElementById("carouselExampleSlidesOnly");

    // Initialize index variable to track the current slide
    var currentIndex = 0;

    // Set an interval to switch to the next slide every 3 seconds (3000 milliseconds)
    var intervalId = setInterval(function() {
      // Increment the index to move to the next slide
      currentIndex++;

      // If we reach the end of the slides, loop back to the beginning
      if (currentIndex === carouselElement.querySelectorAll(".carousel-item").length) {
        currentIndex = 0;
      }

      // Set the appropriate slide as active
      carouselElement.querySelector(".carousel-item.active").classList.remove("active");
      carouselElement.querySelectorAll(".carousel-item")[currentIndex].classList.add("active");
    }, 3000); // Change the time interval as needed (in milliseconds)

    // Stop the carousel autoplay when the mouse enters the carousel
    carouselElement.addEventListener("mouseenter", function() {
      clearInterval(intervalId);
    });

    // Restart the carousel autoplay when the mouse leaves the carousel
    carouselElement.addEventListener("mouseleave", function() {
      intervalId = setInterval(function() {
        currentIndex++;
        if (currentIndex === carouselElement.querySelectorAll(".carousel-item").length) {
          currentIndex = 0;
        }
        carouselElement.querySelector(".carousel-item.active").classList.remove("active");
        carouselElement.querySelectorAll(".carousel-item")[currentIndex].classList.add("active");
      }, 3000);
    });
  });


  // Keep track of the last scroll position to determine scrolling direction
var lastScrollPosition = window.pageYOffset;

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealBottom = reveals[i].getBoundingClientRect().bottom;
        var revealPoint = windowHeight * 0.75;

        // Calculate the position of the top and bottom of the section containing the reveal element
        var sectionTop = reveals[i].closest('section').getBoundingClientRect().top;
        var sectionBottom = reveals[i].closest('section').getBoundingClientRect().bottom;

        // Adjust revealPoint based on scrolling direction
        var scrollDirection = window.pageYOffset > lastScrollPosition ? 'down' : 'up';
        var triggerPoint;

        if (scrollDirection === 'down') {
            // Scroll direction: down
            triggerPoint = windowHeight - sectionTop;
        } else {
            // Scroll direction: up
            triggerPoint = sectionBottom - revealPoint;
        }

        if (triggerPoint > 0 && triggerPoint <= revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }

    // Update the last scroll position
    lastScrollPosition = window.pageYOffset;
}

// $(document).ready(function () {

//     $('#menu').click(function () {
//         $(this).toggleClass('fa-times');
//         $('.menu').toggleClass('nav-toggle');
//     });

//     $(window).on('scroll load', function () {
//         $('#menu').removeClass('fa-times');
//         $('.menu').removeClass('nav-toggle');

//         if (window.scrollY > 60) {
//             document.querySelector('#scroll-top').classList.add('active');
//         } else {
//             document.querySelector('#scroll-top').classList.remove('active');
//         }

//         // scroll spy
//         $('section').each(function () {
//             let height = $(this).height();
//             let offset = $(this).offset().top - 200;
//             let top = $(window).scrollTop();
//             let id = $(this).attr('id');

//             if (top > offset && top < offset + height) {
//                 $('.menu ul li a').removeClass('active');
//                 $('.menu').find(`[href="#${id}"]`).addClass('active');
//             }
//         });
//     });

//     // smooth scrolling
//     $('a[href*="#"]').on('click', function (e) {
//         e.preventDefault();
//         $('html, body').animate({
//             scrollTop: $($(this).attr('href')).offset().top,
//         }, 500, 'linear')
//     });
// })