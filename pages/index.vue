<template>
  <div>
    <Nav />

    <section class="pb-2 overflow-hidden px-5 lg:px-10 mt-5" id="Home">
      <div class="flex h-40 md:h-screen">
        <div class="pt-3 overflow-hidden">
          <div class="h-full object-cover">
            <img class="h-full object-cover" src="hero.jpg" alt="" />
          </div>
          <div class="h-full object-cover">
            <img class="h-full object-cover" src="hero.jpg" alt="" />
          </div>
          <div class="h-full object-cover">
            <img class="h-full object-cover" src="hero.jpg" alt="" />
          </div>
        </div>

        <div class="pt-3 overflow-hidden">
          <div class="h-full object-cover">
            <img class="h-full object-cover" src="hero.jpg" alt="" />
          </div>
          <div class="h-full object-cover">
            <img class="h-full object-cover" src="hero.jpg" alt="" />
          </div>
          <div class="h-full object-cover">
            <img class="h-full object-cover" src="hero.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <h1 class="text-center text-3xl md:text-5xl font-bold mt-10">Service</h1>
    <Service />

    <section class="p-10 text-gray-800 h-screen w-full" id="Our_Team">
      <h1 class="text-5xl text-center font-bold">Our Team</h1>
      <div class="relative h-[400px] w-[300px]">
        <img
          src="pic1.jpg"
          class="absolute h-full w-full object-cover"
          alt=""
        />
        <div class="absolute h-full w-full bg-red-400"></div>
      </div>
    </section>

    <section
      class="text-gray-800 p-10 pt-5 relative overflow-hidden"
      id="About"
    >
      <h1 class="text-center text-3xl lg:text-5xl font-bold relative">About</h1>
      <div
        class="grid gap-10 grid-cols-1 md:grid-cols-3 md:mt-10 rounded-xl md:ml-48 px-5 pt-4 mt-4 md:px-10 bg-gray-400 md:w-[850px]"
      >
        <div
          class="flex justify-center items-center font-semibold col-span-2 text-justify"
        >
          Eyam Poosu is a photo editing service. We are specialized in digital
          painting, color correction, vector art, Photos Collage, Caricature
          Art, Background Correction and also provide professional look by
          removing props, smoothing creases, reducing wrinkles, improving shape
          and symmetry, and cleaning up skin blemishes.
        </div>
        <div class="pl-8 rotate-[30deg]">
          <img src="Ep1.png" alt="" />
        </div>
      </div>
      <!-- <div class="flex justify-end">
                <div class="bg-red-400 h-[600px] w-[600px] top-14 rotate-45 mr-0 absolute z-5"></div>
                <div class="bg-red-400 h-[600px] w-[600px] top-14  mr-0 absolute z-5"></div>
            </div> -->
    </section>
    <!-- <section class="text-gray-800 p-10 relative overflow-hidden bg-violet-300" id="Contact">
      <h1 class="text-center text-3xl lg:text-5xl font-bold">Contact</h1>
      <div class="grid gap-10 grid-cols-1 md:grid-cols-3 mt-10 relative">
        <div class="bg-slate-500"><img src="pic3.jpg" alt="" /></div>
        <div class="col-span-2 bg-pink-400">right</div>
      </div>
    </section> -->

    <Footer />
  </div>
</template>

<!-- <script>
    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  </script> -->
