const swiper = new Swiper(".swiper", {
    loop: true,
    autoHeight: false,
    centeredSlides: true,
    slidesPerView: 1,
      // autoplay: {
      //   delay: 2000, // Change slide every 3 seconds
      // },
    breakpoints: {
      // Mobile devices (up to 499px)
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // Tablet devices (500px to 899px)
      500: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      650: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      // Medium tablets (900px to 1023px)
      900: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      // Laptop devices (1024px to 1439px)
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // Large laptops/desktops (1440px and above)
      1440: {
        slidesPerView: 4.5,
        spaceBetween: 30,
      },
    },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     type: "bullets",
    //     dynamicBullets: true,
    //     clickable: true,
    //     // Enable clicking on pagination bullets to switch slides
    //   },
    navigation: {
      // nextEl: ".swiper-button-next",
      // prevEl: ".swiper-button-prev",
    //   nextEl: ".arrow-left",
    //   prevEl: ".arrow-right",
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });