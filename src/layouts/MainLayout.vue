<template>
  <div class="tw-flex">
    <div class="tw-w-1/2 tw-bg-green-500">
      <generate-cv />
    </div>
    <div class="tw-w-1/2 tw-bg-red-500">2/3</div>
  </div>
</template>

<script>
import GenerateCv from "src/components/GenerateCv.vue";

export default {
  name: "MainLayout",

  components: {
    GenerateCv,
  },
};
</script>
