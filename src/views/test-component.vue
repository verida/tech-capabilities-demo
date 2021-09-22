<template>
  <div class="hello">
    <h1>Colored Text</h1>
    <button>{{ msg }}</button>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      msg: "Push Me",
    };
  },
});
</script>

<style>
.hello {
  text-align: center;
  color: #900;
}
</style>
