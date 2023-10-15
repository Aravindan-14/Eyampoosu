<template>
  <div>
    <Nav />
    <div class=" md:flex md:gap-10 overflow-hidden pt-10 py-5 px-5" id="pageTwo">
      <div class="flex justify-center items-center  md:h-[500px] md:w-1/2">
        <img class="lg:h-[500px] md:h[300px]  " src="pic1.jpg" alt="">
      </div>
      <div class="md:w-1/2">
        <H1 class="font-bold lg:text-3xl text-2xl pt-5 lg:pt-0 uppercase pb-5">Color Correction</H1>
        <H3 class="font-semibold text-2xl mb-5">Rs.1000</H3>
        <p class="lg:pr-40 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, rem a repudiandae tempore molestias perspiciatis expedita officiis eveniet explicabo est.</p>
        <div>
          <span class="font-semibold text-2xl">size</span>
          <div class="flex gap-2 mt-2">
            <p class="hover:bg-black hover:text-white text-xs border-solid  border-2 font-semibold p-1 px-2">420 x 297</p>
            <p class="hover:bg-black hover:text-white text-xs border-solid  border-2 font-semibold p-1 px-2">594 x 420</p>
            <p class="hover:bg-black hover:text-white text-xs border-solid  border-2 font-semibold p-1 px-2">297 x 210</p>
          </div>
          <div>
           <h4 class="mt-5 mb-2 uppercase font-bold">Quantity</h4>
           <div class="flex justify-around text-center items-center px-1 border-2 w-20 text-xl">
            <div  class="cursor-pointer">-</div>
            <div><p>1</p></div>
            <div class="cursor-pointer">+</div>
           </div>
          </div>
        </div>
        <nuxt-link to="/buyscreen"> <button class="mt-16 lg:mt-16 md:mt-9 w-full text-center hover:bg-black border-2 border-solid border-black hover:text-white py-3 uppercase font-bold">Buy it Now</button></nuxt-link>
      </div>
    </div>
    <ServiceTwo />
    <Footer />
  </div>
</template>
