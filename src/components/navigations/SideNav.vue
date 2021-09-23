<template>
  <div>
    <aside class="side-bar">
      <a href="/" class="text-decoration-none">
        <img height="40" src="../../assets/images/Logo.svg" alt="verida-logo" />
      </a>
      <h1>Demos</h1>
      <ul>
        <li>
          <img src="../../assets/icons/link.svg" alt="connect" />
          <a href="/connect" :class="{ active: activePage == 'Connect' }">
            Connect</a
          >
        </li>
        <li>
          <img src="../../assets/icons/Tree.svg" alt="connect" />
          <a href="##">Store Data</a>
        </li>
        <li>
          <img src="../../assets/icons/Share.svg" alt="connect" />
          <a href="##">Send Data</a>
        </li>
        <li>
          <img src="../../assets/icons/Database.svg" alt="connect" />
          <a href="##">Store Data</a>
        </li>
        <li>
          <img src="../../assets/icons/pull_request.svg" alt="connect" />
          <a href="##">Request Data & Respond</a>
        </li>
      </ul>
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

.active {
  color: $app-green;
}
.side-bar {
  //   display: flex;
  //   flex-flow: column nowrap;
  //   align-items: flex-start;
  //   position: fixed;
  //   left: 0;
  //   top: 0;
  height: 100%;
  //   width: 18%;
  margin: 1rem 0;
  padding: 1rem 3rem 0 2rem;
  border-right: 1px solid #1d1f40;

  h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #f3f3f3;
    margin: 2.5rem 0 1.2rem 0;
  }

  ul {
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      font-size: 14px;
      line-height: 21px;

      img {
        margin: 0rem 1.2rem 0 0;
        fill: $white;
      }
      a {
        text-decoration: none;
        color: $white;
        &:hover {
          color: $app-green;
        }
      }
    }
  }
}
</style>
