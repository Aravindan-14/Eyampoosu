<template>
  <div>
    <Nav />
    <section class="bg-slate-200">
      <div class="hidden lg:flex justify-start">
        <img
          src="pic1.jpg"
          class="h-[400px] absolute mt-[125px] ml-10 shadow-[15px_15px_20px_-3px_rgba(0,0,0,1.7)]"
          alt=""
        />
      </div>
      <div class="md:flex justify-end items-center h-screen">
        <form
          class="md:grid md:grid-cols-2 gap-1 md:gap-4 bg-slate-400 w-full md:w-[1110px] md:pl-[270px] px-5 pb-5 md:py-10 pt-5 md:mr-10"
        >
          <h1 class="col-span-2 text-center font-bold text-4xl uppercase pb-2">
            Buy Now
          </h1>
          <div class="mb-4">
            <label
              for="name"
              class="block text-gray-700 text-sm font-medium mb-2"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-medium mb-2"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-medium mb-2"
              >Prodect</label
            >
            <input
              type="text"
              id="email"
              name="email"
              class="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>

          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-medium mb-2"
              >Phone No</label
            >
            <input
              type="text"
              id="email"
              name="email"
              class="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>

          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-medium mb-2"
              >Upload Photo</label
            >
            <input
              type="file"
              id="email"
              name="email"
              class="border bg-white rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="block text-gray-700 text-sm font-medium mb-2"
              >Message</label
            >
            <textarea
              id="message"
              placeholder="Enter Your Address"
              name="message"
              rows="4"
              class="border h-12 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div class="grid col-span-2">
            <button
              type="submit"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>
