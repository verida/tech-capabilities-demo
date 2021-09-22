<template>
  <div>
    <div class="content">
      <content-display />
      <code-example />
      <h3 class="my-5 text-white text-center">Test this Code</h3>
      <live-preview
        :require="{ '../helpers/VaultConnector': vaultConnector }"
        classCode="col-md-6"
        classPrev="col-md-6"
        code="
        <template>
          <div class='preview'>
            <h1>{name}</h1>
            <a  href='##'>Terms&Conditions</a>
            <button @click='connect' class='btn btn-secondary btn-lg text-center'>
            Connect
            </button>
          </div>
        </template>
        <script>
       
       import vaultConnector from '../helpers/VaultConnector';
        export default {
          data() {
            return {
              loading: false,
              name:'Micke'
            };
          },
          methods: {
           async connect() {
            alert('Hello')
            await vaultConnector.connectVault();
          
          },
          profile(data) {
            console.log(data);
          },
        },
        }
      </script>
      <style scoped>

        .preview {
          background:#fff;
          height:300px;
        }
     </style>
     `"
      >
      </live-preview>
    </div>
    <explore-demo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContentDisplay from "@/components/demoSection/Content.vue";
import CodeExample from "@/components/demoSection/CodeExample.vue";
import AppFooter from "@/components/Footer.vue";
import ExploreDemo from "@/components/ExploreDemoCard.vue";
// import vaultConnector from "../helpers/VaultConnector";

export default Vue.extend({
  name: "ContentSection",
  components: {
    ContentDisplay,
    CodeExample,
    ExploreDemo,
  },
  data() {
    return {
      AppFooter,
      loading: false,
    };
  },
  methods: {},
});
</script>

<style scoped lang="scss">
@import "../assets/scss/_variable.scss";
h3 {
  font-size: 36px;
}
</style>
