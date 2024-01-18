<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

import { useForm } from "vee-validate";
import * as yup from "yup";

const { values, errors, defineField } = useForm({
  validationSchema: yup.object({
    fullName: yup
      .string()
      .min(3, "نام باید حداقل 3 کارکتر باشد")
      .required("فیلد نام را درست وارد کنید"),
    nationalCode: yup
      .string()
      .matches(/^\d{10}$/, "کد ملی را درست وارد  کنید")
      .required("کد ملی الزامی است"),
  }),
});

const [fullName, fullNameAttrs] = defineField("fullName");
const [nationalCode, nationalCodeAttrs] = defineField("nationalCode");

const activeButton = ref(false);

function validationActiveButton(errors) {
  try {
    return (
      Object.keys(errors).length == 0 &&
      fullName.value?.toString().length &&
      nationalCode.value?.toString().length
    );
  } catch (error) {
    return false;
  }
}

watch(errors, (v, o) => {
  activeButton.value = validationActiveButton(v);
});


import { useFileDialog,useObjectUrl  } from '@vueuse/core'
const file = shallowRef()
const url = useObjectUrl(file);

const { files, open, reset, onChange } = useFileDialog({
  accept: 'image/*', // Set to accept only image files
  directory: false, // Select directories instead of files if set true
})

onChange((files) => {
  /** do something with files */
  console.log(files)
  file.value=files[0]
})

</script>

<template>
  <div
    class="flex w-full md:max-w-96 m-auto flex-col items-center justify-between min-h-screen bg-gray-100 py-6 px-5"
  >
    <div class="w-full px-2">
      <NuxtLink to="/">
        <nuxt-icon name="ArrowLeftFilled" filled />
      </NuxtLink>
    </div>
    <div class="flex gap-4 w-full flex-col items-between space-y-12">
      <div class="w-full flex flex-col justify-center items-center">
        <button type="button" 
          @click="open()"
          class="flex flex-col items-center justify-center w-44 px-12 h-40 rounded-full bg-rose-600 cursor-pointer sm:w-32 sm:h-32 md:w-40 md:h-40"
        >
        <img v-if="file" class="w-20 h-20" :src="url" alt="">

          <svg
          v-else
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
          
          
        </button>
        
        <p class="py-3 font-medium">عکس پروفایل</p>
      </div>

      <!-- <NuxtImg
        src="/images/trucklogin.png"
        alt="Truck login"
        class="max-w-xs object-fill"
        style="object-fit: cover"
      /> -->
      <div class="gap-3 w-full flex flex-col">
        <div
          class="flex flex-col gap-3 items-center justify-center bg-white py-2 px-4 rounded-lg shadow-md"
        >
          <input
            class="w-full outline-none text-right py-2"
            placeholder="نام و نام خانوادگی"
            v-model="fullName"
            v-bind="fullNameAttrs"
          />
        </div>
        <p class="pr-2 text-right text-xs text-rose-500">
          {{ errors.fullName }}
        </p>
        <div
          class="flex flex-col gap-3 items-center justify-center bg-white py-2 px-4 rounded-lg shadow-md"
        >
          <input
            class="w-full outline-none text-right py-2"
            placeholder="کد ملی"
            v-model="nationalCode"
            v-bind="nationalCodeAttrs"
          />
        </div>
        <p class="text-right text-xs pr-2 text-rose-500">
          {{ errors.nationalCode }}
        </p>
      </div>
    </div>
    <div class="w-full px-4 py-2 h-24">
      <button
        ref="loginButtonRef"
        @click="login"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-6 w-full bg-gray-300 text-gray-500"
        :class="{ 'bg-teal-500 text-white': activeButton }"
      >
        ادامه
      </button>
    </div>
  </div>
</template>



<style scoped>
</style>