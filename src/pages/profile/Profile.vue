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
    <!-- sidebar -->
    <div class="col-span-3">
      <ProfileMenu />
    </div>
    <!-- sidebar end -->

    <!-- account content -->
    <div class="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
      <form action="">
        <h3 class="text-lg font-medium capitalize mb-4">Profile Information</h3>
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="text-gray-600 mb-2 block"> First Name </label>
              <input type="text" class="input-box w-full" value="John" />
            </div>
            <div>
              <label class="text-gray-600 mb-2 block"> Last Name </label>
              <input type="text" class="input-box w-full" value="Doe" />
            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="text-gray-600 mb-2 block"> Birthday </label>
              <input type="date" value="1998-01-08" class="input-box w-full" />
            </div>
            <div>
              <label class="text-gray-600 mb-2 block"> Gender </label>
              <select class="input-box w-full">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="text-gray-600 mb-2 block"> Email Address </label>
              <input type="text" class="input-box w-full" value="example@mail.com" />
            </div>
            <div>
              <label class="text-gray-600 mb-2 block"> Phone Number </label>
              <input type="text" class="input-box w-full" value="+123 456 789" />
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
