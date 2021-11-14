<template>
  <div>
    <aside class="side-bar">
      <a href="/" class="text-decoration-none">
        <img height="40" src="../../assets/images/Logo.svg" alt="verida-logo" />
      </a>
      <h1>Tutorials</h1>
      <router-link
        class="router-link"
        to="/connect"
        v-slot="{ href, navigate, isActive }"
        custom
      >
        <li class="li">
          <img src="../../assets/icons/link.svg" alt="connect" />
          <a
            :href="href"
            :class="[isActive ? 'router-link-active' : 'text-white']"
            @click="navigate"
            >Connect</a
          >
        </li>
      </router-link>
      <router-link
        class="router-link"
        to="/send-message"
        v-slot="{ href, navigate, isActive }"
        custom
      >
        <li class="li">
          <img src="../../assets/icons/Tree.svg" alt="connect" />
          <a
            :href="href"
            :class="[isActive ? 'router-link-active' : 'text-white']"
            @click="navigate"
            >Send Message</a
          >
        </li>
      </router-link>
      <router-link
        class="router-link"
        to="/schemaless-data"
        v-slot="{ href, navigate, isActive }"
        custom
      >
        <li class="li">
          <img src="../../assets/icons/Share.svg" alt="connect" />
          <a
            :href="href"
            :class="[isActive ? 'router-link-active' : 'text-white']"
            @click="navigate"
            >Store Schemaless Data</a
          >
        </li>
      </router-link>
      <router-link
        class="router-link"
        to="/store-data"
        v-slot="{ href, navigate, isActive }"
        custom
      >
        <li class="li">
          <img src="../../assets/icons/Database.svg" alt="Database" />
          <a
            :href="href"
            :class="[isActive ? 'router-link-active' : 'text-white']"
            @click="navigate"
            >Store Data With Schema</a
          >
        </li>
      </router-link>
      <!-- <router-link
        class="router-link"
        to="/request-data-respond"
        v-slot="{ href, navigate, isActive }"
        custom
      >
        <li class="li">
          <img src="../../assets/icons/pull_request.svg" alt="pull_request" />
          <a
            :href="href"
            :class="[isActive ? 'router-link-active' : 'text-white']"
            @click="navigate"
            >Request Data & Respond</a
          >
        </li>
      </router-link> -->
      <!-- <router-link
        class="router-link"
        to="/share-data"
        v-slot="{ href, navigate, isActive }"
        custom
      >
        <li class="li">
          <img src="../../assets/icons/Share.svg" alt="sahre" />
          <a
            :href="href"
            :class="[isActive ? 'router-link-active' : 'text-white']"
            @click="navigate"
            >Share Data</a
          >
        </li>
      </router-link> -->
    </aside>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "side-nav",
  computed: {
    activePage() {
      console.log(this.$route.name);

      return this.$route.name;
    },
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/_variable.scss";

.router-link-active {
  color: $app-green;
}

.li {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 14px;
  line-height: 21px;

  img {
    margin: 0rem 1.2rem 0 0;
  }
  a {
    text-decoration: none;
    &:hover {
      color: $app-green;
    }
  }
}

.side-bar {
  height: 100%;
  margin: 1rem 0;
  padding: 1rem 3rem 0 2rem;
  border-right: 1px solid #1d1f40;

  @media (max-width: 768px) {
    display: none;
  }

  h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #f3f3f3;
    margin: 2.5rem 0 1.2rem 0;
  }
}
</style>
