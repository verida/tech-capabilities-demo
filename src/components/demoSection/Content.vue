<template>
  <div>
    <div class="content">
      <h1 class="text-primary">{{ title }}</h1>
      <p class="mb-4">
        Facilisis dui elit etiam eget dictum nunc elementum auctor urna. Morbi
        vestibulum, et, nunc, consequat lacus, morbi mattis. Scelerisque in
        ornare ac lobortis dictum lobortis suspendisse turpis ridiculus. At
        sollicitudin quam pellentesque cras faucibus
      </p>
      <p class="mb-5">
        Facilisis dui elit etiam eget dictum nunc elementum auctor urna. Morbi
        vestibulum, et, nunc, consequat lacus, morbi mattis. Scelerisque in
        ornare ac lobortis elit etiam eget dictum nunc at sollicitudin quam
        pellentesque
      </p>
      <div class="content-image text-center mb-4">
        <img class="img-fluid" src="../../assets/images/carousel.png" alt="" />
      </div>
      <p class="mt-5">
        Facilisis dui elit etiam eget dictum nunc elementum auctor urna. Morbi
        vestibulum, et, nunc, consequat lacus, morbi mattis. Scelerisque in
        ornare ac lobortis elit etiam eget dictum nunc at sollicitudin quam
        pellentesque
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ContentSection",
  props: {
    title: {
      type: String,
      default: "Connect",
    },
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/_variable.scss";

.content {
  h1 {
    margin: 0 0 3rem 0;
    font-size: 48px;
  }
  p {
    font-weight: 300;
    font-size: 18px;
    letter-spacing: -0.03em;
    color: #b8b8b8;
  }
}
</style>
