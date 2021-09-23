<template>
  <div>
    <div class="app-header">
      <img src="./assets/logoverida.svg" alt="verida-logo" />
      <div v-show="connected" class="app-avatar">
        <span>{{ profile.name }}</span>
        <img :src="profile.avatar" alt="user" />
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
        <img src="./assets/link.svg" alt="connect" />Connect
      </button>
      <button @click="disconnect" v-show="connected" class="disconnect">
        <img src="./assets/Unlink.svg" alt="connect" />Diconnect
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ProfileDetails } from "@/interface/interface";
import { defineComponent } from "vue";
import connecVault from "./helpers/ConnectVault";

export default defineComponent({
  name: "App",
  data() {
    return {
      connected: false,
      connecting: false,
      profile: {},
    };
  },
  components: {},
  methods: {
    async connect() {
      this.connecting = true;
      await connecVault.connect();
      this.setprofile();
      this.connected = true;
      this.connecting = false;
    },
    setprofile() {
      const user: ProfileDetails = connecVault.profile as ProfileDetails;
      this.profile = {
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
  },
  created() {
    connecVault.on("profileChanged", () => {
      this.setprofile();
    });
    this.connect();
  },
});
</script>

<style lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  box-shadow: 0px 4px 15px rgba(17, 45, 87, 0.05);
}

.app-avatar {
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #041133;
    margin: 0px 16px;
  }

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
}

.action-btn button {
  display: flex;
  align-items: center;
  padding: 8px 48px;
  position: absolute;
  width: 193px;
  height: 52px;
  left: calc(50% - 193px / 2 + 0.5px);
  top: 50%;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;

  img {
    margin: 0 0.3rem;
  }
}

.connect {
  background: #423bce;
}

.disconnect {
  background: #060520;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem auto 0 auto;

  div {
    width: 0.6rem;
    height: 3rem;
    margin: 2rem 0.3rem;
    background: black;
    border-radius: 12px;
    animation: 0.9s bounce infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
}

p {
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.03em;
  color: #888888;
}

@keyframes bounce {
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  }
}
</style>
