<template>
  <!-- breadcrum -->
  <div class="py-4 container flex gap-3 items-center">
    <a href="index.html" class="text-primary text-base">
      <i class="fas fa-home"></i>
    </a>
    <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
    <p class="text-gray-600 font-medium uppercase">My Account</p>
  </div>
  <!-- breadcrum end -->

  <!-- account wrapper -->
  <div class="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <ProfileMenu />

    <!-- account content -->
    <div class="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
      <form action="">
        <h3 class="text-lg font-medium capitalize mb-4">Change password</h3>
        <div class="space-y-4 max-w-sm">
          <div>
            <label class="text-gray-600 mb-2 block"> Current Password </label>
            <div class="relative">
              <span class="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                <i class="far fa-eye-slash"></i>
              </span>
              <input type="text" class="input-box w-full" placeholder="enter current password" />
            </div>
          </div>
          <div>
            <label class="text-gray-600 mb-2 block"> New Password </label>
            <div class="relative">
              <span class="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                <i class="far fa-eye-slash"></i>
              </span>
              <input type="text" class="input-box w-full" placeholder="enter new password" />
            </div>
          </div>
          <div>
            <label class="text-gray-600 mb-2 block"> Confirm Password </label>
            <div class="relative">
              <span class="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                <i class="far fa-eye-slash"></i>
              </span>
              <input type="text" class="input-box w-full" placeholder="enter confirm password" />
            </div>
          </div>
        </div>
        <div class="mt-6">
          <button
            type="submit"
            class="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Save change
          </button>
        </div>
      </form>
    </div>
    <!-- account content end -->
  </div>
  <!-- account wrapper end -->
</template>

<script setup lang="ts">
import ProfileMenu from '@/components/ProfileMenu.vue'
</script>
