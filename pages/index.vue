  
<script setup>


async function fetchRequiredData(){

}



onMounted(async ()=>{
  const res = await fetchRequiredData();
  setTimeout(() => {
    navigateTo('/registerType')
  }, 100000);
});
</script>
  


<template>
  <div
    class="bg-[#da0037] flex flex-col items-center justify-center min-h-screen p-4"
  >
    <div class="">
      <div class="flex flex-col items-center justify-center pt-10">
        <div class="w-44 animate-slide-down">
          <img class="" src="/images/intro-logo.png" alt="Image" />
        </div>
      </div>
      <div class="flex py-6 flex-col items-center justify-center space-y-5">
        <div class="w-4/5 animate-slide-up">
          <img src="/images/intro.webp" alt="Image" class="w-25 h-auto" />
        </div>
      </div>
      <!-- <div class="flex items-center justify-center space-x-2 pb-10"> -->
      <div class="w-full -mt-8  h-fit rounded-md flex justify-center">
        <nuxt-icon name="Loading" class="text-[95px]  leading-3  text-white" />

        
      </div>
    </div>
  </div>
</template>

  <style scoped>
.cls-1 {
  clip-path: url(#clip-Login_path);
}
.cls-2 {
  fill: #eee;
}
.cls-3,
.cls-4 {
  fill: #da0037;
}
.cls-3 {
  font-size: 110.949px;
  font-family: Kalameh-Medium, Kalameh;
}
.cls-3,
.cls-6 {
  font-weight: 500;
}
.cls-5,
.cls-6,
.cls-7 {
  fill: #fff;
}
.cls-5 {
  font-size: 48.071px;
  font-family: Kalameh-Regular, Kalameh;
}
.cls-6 {
  font-size: 45px;
  font-family: Vazir-Medium, Vazir;
}
</style>