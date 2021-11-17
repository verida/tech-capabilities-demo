<template>
  <div class="footer">
    <div class="footer-links">
      <div class="footer-links-img">
        <a href="https://verida.io" target="_blanck">
          <img height="40" src="../assets/images/Logo.svg" alt="verida-logo"
        /></a>
      </div>
      <div class="footer-links-nav">
        <h5>{{ footerNav.products.title }}</h5>
        <ul v-for="item in footerNav.products.list" :key="item.title">
          <li>
            <a :href="item.link" target="_blanck">{{ item.title }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-links-nav">
        <h5>{{ footerNav.company.title }}</h5>
        <ul v-for="item in footerNav.company.list" :key="item.title">
          <li>
            <a :href="item.link" target="_blanck">{{ item.title }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-links-nav">
        <h5>{{ footerNav.developers.title }}</h5>
        <ul v-for="item in footerNav.developers.list" :key="item.title">
          <li>
            <a :href="item.link" target="_blanck">{{ item.title }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-links-nav">
        <h5>{{ footerNav.community.title }}</h5>
        <ul v-for="item in footerNav.community.list" :key="item.title">
          <li>
            <a :href="item.link" target="_blanck">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="divider" />
    <div class="footer-content d-flex justify-content-between">
      <a class="text-white" href="##">@Verida{{ date }}</a>
      <a class="text-white" href="##">Terms&Conditions</a>
    </div>
  </div>
</template>

<script lang="ts">
import { community, company, developers, products } from "@/constants/constant";
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  data() {
    return {
      date: new Date().getFullYear(),
      footerNav: {
        products: {
          title: "Products",
          list: products,
        },
        company: {
          title: "Company",
          list: company,
        },
        developers: {
          title: "For Developers",
          list: developers,
        },
        community: {
          title: "Community",
          list: community,
        },
      },
    };
  },
});
</script>

<style scoped lang="scss">
@import "../assets/scss/_variable.scss";

.footer {
  &-links {
    display: flex;
    justify-content: space-between;
    &-img {
      margin: 1.8rem 0.4rem 0 0.4rem;
    }
    &-nav {
      text-align: left;
      margin: 1rem 0 0 0;
      h5 {
        color: $white;
        font-size: 1rem;
      }
      ul {
        padding: 0;
        li {
          list-style: none;
        }
        a {
          color: $text-dark;
          &:hover {
            color: $app-green;
          }
        }
      }
    }
  }
}

.footer-content {
  color: $text-color;
  padding: 2rem 2rem 0 2rem;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
}

.divider {
  margin: 0rem 0rem 0rem 0rem;
  background: #687085;
  height: 1px;
}
</style>
