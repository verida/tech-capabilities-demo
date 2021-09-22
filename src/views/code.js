export const connectCode = `
<template>
  <div class="vue-live-preview">
     <app-header></app-header>
   
    <img src="https://mons54.github.io/vue-live-preview/vue.png">
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
  const name = "Vue Live Preview"
  export default {
    name: 'Code',
    components: {
        AppHeader
    },
    data () {
      return {
        name: name
      }
    },
    methods: {
        connect(): Promise<void> {
        console.log("open...");
        console.log("close...");
        alert("hello");
    },
        profile(data: any) {
            console.log(data);
        },
    },
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
`;
