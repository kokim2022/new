<template>
  <div class="tw-flex">
    <div class="tw-w-1/3 tw-bg-green-500">
      <log-in />
    </div>
    <div class="tw-w-2/3 tw-bg-red-500">2/3</div>
  </div>
</template>

<script>
import LogIn from "src/components/LoginComponent.vue";

export default {
  name: "MainLayout",

  components: {
    LogIn,
  },
};
</script>
