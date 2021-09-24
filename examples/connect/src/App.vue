<template>
  <div>
    <div class="app-header">
      <img src="http://assets.verida.io/verida_logo.svg" alt="verida-logo" />
      <div v-show="connected" class="app-avatar">
        <span>{{ profile.name }}</span>
        <img @click="onDropDown()" :src="profile.avatar" alt="user" />
        <div v-show="dropdown" class="m-dropdown">
          <div class="m-dropdown-top">
            <div>
              <h4>{{ profile.name }}</h4>
              <span>{{ profile.did }}</span>
            </div>
            <img :src="profile.avatar" alt="user" />
          </div>
          <div class="m-dropdown-logout">
            <img height="10" src="./assets/logout.png" alt="" />
            <span @click="disconnect">Log out</span>
          </div>
        </div>
      </div>
    </div>
    <div v-show="connecting">
      <div class="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Connecting....</p>
    </div>
    <div class="action-btn">
      <button v-show="!connecting" @click="connect" class="connect">
        <img src="./assets/link.png" alt="connect" />Connect
      </button>
      <button @click="disconnect" v-show="connected" class="disconnect">
        <img src="./assets/Unlink.png" alt="connect" />Diconnect
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ProfileDetails } from "@/interface/interface";
import { defineComponent } from "vue";
import connectVault from "./helpers/ConnectVault";
import connecVault from "./helpers/ConnectVault";

export default defineComponent({
  name: "App",
  data() {
    return {
      dropdown: false,
      connected: false,
      connecting: false,
      profile: {},
    };
  },
  components: {},
  methods: {
    onDropDown() {
      this.dropdown = !this.dropdown;
    },
    async connect() {
      this.connecting = true;
      await connecVault.connect();
      this.setprofile();
      this.connected = true;
      this.connecting = false;
    },
    setprofile() {
      const { did, profile } = connectVault;
      const user: ProfileDetails = profile as ProfileDetails;
      this.profile = {
        did: did,
        name: user.name,
        country: user.country,
      };
      if (user.avatar) {
        const parseAvatarValue = JSON.parse(user?.avatar);
        this.profile = {
          ...this.profile,
          avatar: `data:image/${parseAvatarValue.format};base64,${parseAvatarValue.base64}`,
        };
      }
    },
    async disconnect() {
      await connecVault.logout();
      this.connected = false;
      this.profile = {
        avatar: "",
        name: "",
        country: "",
      };
    },
    closeModal(event: any) {
      if (
        event.target.id === "verida-modal" ||
        event.target.id === "verida-modal-close"
      ) {
        this.connecting = false;
      }
    },
  },
  created() {
    connecVault.on("profileChanged", () => {
      this.setprofile();
    });
    window.addEventListener("click", this.closeModal);
  },
});
</script>
