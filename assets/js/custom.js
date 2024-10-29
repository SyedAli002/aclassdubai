$(document).ready(function () {
  AOS.init();
  // Initialize Slick Carousel for main slider
  //   $(".portfolio-slider-for").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     asNavFor: ".portfolio-slider-nav", // Corrected the class name here
  //   });

  //   // Initialize Slick Carousel for navigation slider
  //   $(".portfolio-slider-nav").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     asNavFor: ".portfolio-slider-for", // Corrected the class name here
  //     dots: true,
  //     focusOnSelect: true,
  //   });
  // });
  AOS.init({
    once: true,
  });

  // flawless-digital-slider start
  // $(document).ready(function () {
  //   $(".flawless-digital-slider").slick({
  //     dots: false,
  //     arrows: false,
  //     autoplay: true,
  //     autoplaySpeed: 1000,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     infinite: true,
  //     responsive: [
  //       { breakpoint: 1000, settings: { slidesToShow: 3 } },
  //       { breakpoint: 768, settings: { slidesToShow:2 } },
  //       { breakpoint: 480, settings: { slidesToShow: 1 } },
  //     ],
  //   });
  // });

  // // flawless-digital-slider end

  // $('.our-services-por').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   dots : true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  // // tech-slider-slider start
  // $(document).ready(function () {
  //   $(".tech-slider").slick({
  //     dots: false,
  //     arrows: false,
  //     autoplay: true,
  //     autoplaySpeed: 0,
  //     cssEase: "linear",
  //     speed: 3000,
  //     slidesToShow: 7,
  //     slidesToScroll: 1,
  //     infinite: true,
  //     responsive: [
  //       { breakpoint: 1000, settings: { slidesToShow:5 } },
  //       { breakpoint: 768, settings: { slidesToShow:3 } },
  //       { breakpoint: 480, settings: { slidesToShow: 2 } },
  //     ],
  //   });
  // });

  // // tech-slider-slider end
  // // tech-slider-slider start
  // $(document).ready(function () {
  //   $(".tech-slider1").slick({
  //     infinite: true,
  //     dots: false,
  //     arrows: false,
  //     autoplay: true,
  //     autoplaySpeed: 0,
  //     cssEase: "linear",
  //     speed: 3000,
  //     slidesToShow: 7,
  //     slidesToScroll: 1,
  //     responsive: [
  //       { breakpoint: 1000, settings: { slidesToShow: 5 } },
  //       { breakpoint: 768, settings: { slidesToShow:3 } },
  //       { breakpoint: 480, settings: { slidesToShow: 2 } },
  //     ],
  //   });
  // });

  // // tech-slider-slider end

  // // client-say-slider start
  // $(document).ready(function () {
  //   $(".client-say-slider").slick({
  //     dots: false,
  //     arrows: false,
  //     speed: 5000,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     infinite: true,
  //     responsive: [
  //       { breakpoint: 1199, settings: { slidesToShow: 2 } },
  //       { breakpoint: 768, settings: { slidesToShow: 2 } },
  //       { breakpoint: 480, settings: { slidesToShow: 1 } },
  //     ],
  //   });
  // });

  // // client-say-slider end

  // // comp-slider start
  // $(document).ready(function () {
  //   $(".comp-slider").slick({
  //     dots: false,
  //     arrows: false,
  //     autoplay: true,
  //     autoplaySpeed: 1000,
  //     // speed: 5000,
  //     slidesToShow: 6,
  //     slidesToScroll: 1,
  //     infinite: true,
  //     responsive: [
  //       { breakpoint: 1000, settings: { slidesToShow: 3 } },
  //       { breakpoint: 480, settings: { slidesToShow: 1 } },
  //     ],
  //   });
  // });

  // // comp-slider end

  // // brands1-slider start
  // $(document).ready(function () {
  //   $(".brands1-slider").slick({
  //     dots: false,
  //     arrows: false,
  //     autoplay: true,
  //     autoplaySpeed: 1000,
  //     // speed: 5000,
  //     slidesToShow: 6,
  //     slidesToScroll: 1,
  //     infinite: true,
  //     responsive: [
  //       { breakpoint: 1000, settings: { slidesToShow: 3 } },
  //       { breakpoint: 480, settings: { slidesToShow: 1 } },
  //     ],
  //   });
  // });

  // // brands1-slider end

  // // counter js start **********************************************************************
  // jQuery(document).ready(function ($) {
  //   function startCounter() {
  //     var hT = $(".counter-sec").offset().top,
  //       hH = $(".counter-sec").outerHeight(),
  //       wH = $(window).height();
  //     if ($(window).scrollTop() > hT + hH - wH) {
  //       $(window).off("scroll", startCounter);
  //       $(".count").each(function () {
  //         var $this = $(this);
  //         var target = $this.find("span").data("target");
  //         $({ Counter: 0 }).animate(
  //           { Counter: target },
  //           {
  //             duration: 2000,
  //             easing: "swing",
  //             step: function (now) {
  //               $this.find("span").text(Math.ceil(now));
  //             },
  //           }
  //         );
  //       });
  //     }
  //   }
  //   $(window).scroll(startCounter);
  //   startCounter();
});

// // counter js end**********************************************************************

// var element = document.getElementById('txt2');
// element.scrollLeft = 0;
