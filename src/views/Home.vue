<template>
  <div>
    <div class="d-flex justify-content-between hero">
      <div class="text-left text-primary hero-content">
        <h1>Verida Tech Capabilities</h1>
        <span>Check out our demos to find out about our capabilities</span>
        <div class="hero-content-demo row">
          <div class="col-6 sm-col-12">
            <router-link
              class="router-link"
              to="/connect"
              v-slot="{ href, navigate }"
              custom
            >
              <a
                :href="href"
                :class="[
                  'hero-content-demo-list text-decoration-none text-white ',
                ]"
                @click="navigate"
              >
                <div class="d-flex justify-content-center">
                  <img src="../assets/icons/link.svg" alt="link" />
                  <span>Connect</span>
                </div>
                <div>
                  <img
                    src="../assets/icons/angle_right.svg"
                    alt="angle_right"
                  />
                </div>
              </a>
            </router-link>
          </div>
          <div class="col-6 sm-col-12">
            <router-link
              class="router-link"
              to="/schemaless-data"
              v-slot="{ href, navigate }"
              custom
            >
              <a
                :href="href"
                :class="[
                  'hero-content-demo-list text-decoration-none text-white ',
                ]"
                @click="navigate"
              >
                <div class="d-flex justify-content-center">
                  <img src="../assets/icons/Tree.svg" alt="link" />
                  <span>Store Schemaless Data</span>
                </div>
                <div>
                  <img
                    src="../assets/icons/angle_right.svg"
                    alt="angle_right"
                  />
                </div>
              </a>
            </router-link>
          </div>
          <div class="col-6 sm-col-12">
            <router-link
              class="router-link"
              to="/send-message"
              v-slot="{ href, navigate }"
              custom
            >
              <a
                :href="href"
                :class="[
                  'hero-content-demo-list text-decoration-none text-white ',
                ]"
                @click="navigate"
              >
                <div class="d-flex">
                  <img src="../assets/icons/Share.svg" alt="link" />
                  <span>Send Message</span>
                </div>
                <div>
                  <img
                    src="../assets/icons/angle_right.svg"
                    alt="angle_right"
                  />
                </div>
              </a>
            </router-link>
          </div>
          <div class="col-6 sm-col-12">
            <router-link
              class="router-link"
              to="/store-data"
              v-slot="{ href, navigate }"
              custom
            >
              <a
                :href="href"
                :class="[
                  'hero-content-demo-list text-decoration-none text-white ',
                ]"
                @click="navigate"
              >
                <div class="d-flex">
                  <img src="../assets/icons/Database.svg" alt="link" />
                  <span>Store Data With Schema</span>
                </div>
                <div>
                  <img
                    src="../assets/icons/angle_right.svg"
                    alt="angle_right"
                  />
                </div>
              </a>
            </router-link>
          </div>
          <!-- <div class="col-6 sm-col-12">
            <router-link
              class="router-link"
              to="/share-data"
              v-slot="{ href, navigate }"
              custom
            >
              <a
                :href="href"
                :class="[
                  'hero-content-demo-list text-decoration-none text-white ',
                ]"
                @click="navigate"
              >
                <div class="d-flex">
                  <img src="../assets/icons/link.svg" alt="link" />
                  <span>Share Data</span>
                </div>
                <div>
                  <img
                    src="../assets/icons/angle_right.svg"
                    alt="angle_right"
                  />
                </div>
              </a>
            </router-link>
          </div> -->
          <!-- <div class="col-6 sm-col-12">
            <router-link
              class="router-link"
              to="/request-data-respond"
              v-slot="{ href, navigate }"
              custom
            >
              <a
                :href="href"
                :class="[
                  'hero-content-demo-list text-decoration-none text-white ',
                ]"
                @click="navigate"
              >
                <div class="d-flex">
                  <img src="../assets/icons/pull_request.svg" alt="link" />
                  <span>Request Data & Respond</span>
                </div>
                <div>
                  <img
                    src="../assets/icons/angle_right.svg"
                    alt="angle_right"
                  />
                </div>
              </a>
            </router-link>
          </div> -->
        </div>
      </div>
      <div clas="hero-image">
        <img src="../assets/images/landing_page.svg" alt="carousel" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
});
</script>

<style scoped lang="scss">
@import "../assets/scss/_variable.scss";
.hero {
  margin: -4rem 0 0 0;
  .hero-content {
    margin: 10rem 0 0 0;
    h1 {
      font-weight: bold;
      font-size: 72px;
      line-height: 86px;
      letter-spacing: -0.03em;
      color: $white;
      word-wrap: break-word;
    }
    &-demo {
      margin: 2.5rem 0 0 0;
      & > div {
        margin: 0.3rem -0.4rem;
      }
      &-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.1rem 0 1.2rem;
        height: 4rem;

        background: #11132c;
        border: 1px solid #1d1f40;
        // box-sizing: border-box;
        box-shadow: 0px 4px 25px rgba(65, 65, 65, 0.4);
        border-radius: $border-radius;
        span {
          margin: 0 0.5rem;
        }
      }
    }
  }
  .hero-image {
    margin: -2rem -5rem 0 0;
    display: none;
    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
