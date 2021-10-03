import Vue from "vue";
import $store from "@/store";

export default Vue.extend({
  computed: {},
  methods: {
    beforeRouteEnter(to: any, from: any, next: any) {
      next(() => {
        $store.commit("demoDisplay", {
          currentPath: to,
          prevPath: from,
        });
      });
    },
  },
});
