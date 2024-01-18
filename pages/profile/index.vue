<script setup>
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100 sm:px-6 md:px-8 bg-gray-100"
  >
    <button class="  absolute top-0 left-0 p-2 text-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
      >
        <path d="m12 19-7-7 7-7"></path>
        <path d="M19 12H5"></path>
      </svg>
    </button>
    <div
      class="h-full  bg-orange-200 flex flex-col items-center w-full max-w-md space-y-6 sm:space-y-8 md:space-y-10"
    >
      <label
        class="flex items-center justify-center w-44 px-12  h-40 rounded-full bg-rose-600 cursor-pointer sm:w-32 sm:h-32 md:w-40 md:h-40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-20 h-20 text-white sm:w-16 sm:h-16 md:w-20 md:h-20"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <circle cx="9" cy="9" r="2"></circle>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
        </svg>
        <input class="hidden" type="file" name="photo_image" />
      </label>
      
      <div class="text-center text-right">
        <p class="text-sm font-semibold sm:text-lg md:text-xl">عکس پروفایل</p>
      </div>
      
      <div class="w-full">
        <input
          name="fname"
          class="flex h-10 border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-6 py-6 mb-4 border text-right sm:text-base md:text-lg bg-[#ffffff] rounded-md shadow-lg"
          placeholder="نام و نام خانوادگی"
          type="text"
        />
        <input
          name="national"
          class="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-6 py-6 border rounded-md text-right sm:text-base md:text-lg"
          placeholder="کد ملی"
          type="text"
        />
      </div>

      <button
        class="inline-flex py-6 text-gray-500 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-black hover:text-white h-10 px-4  w-full bg-gray-300 sm:text-base md:text-lg"
      >
        ادامه
      </button>
    
    </div>
  </div>
</template>