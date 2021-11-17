import "../assets/styles/connect.css";
import unlinkIcon from "../assets/images/unlink.png";
import linkIcon from "../assets/images/link.png";
import VeridaHelpers from "../helpers/VeridaHelpers";

export const Connect = () => {
  document.getElementById("app").innerHTML = `
<div>
    <div class="app-header">
      <img src="http://assets.verida.io/verida_logo.svg" alt="verida-logo" />
      <div  class="app-user">
        <span class="user-name"></span>
        <img class="user-avatar"  src="" alt="user" />
      </div>
    </div>
    <div class="waiting-to-connect">
      <div class="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Connecting....</p>
    </div>
    <div class="action-btn">
      <button class="connect" id="connect">
        <img class="btn-image" src=${linkIcon}  /><span>Connect</span>
      </button>
      <button class="disconnect">
        <img class="btn-image" src=${unlinkIcon}  /><span>Disconnect</span>
      </button>
    </div>
  </div>
`;

  const createElement = (type) => {
    return document.querySelector(type);
  };

  const logout = async () => {
    await VeridaHelpers.logout();
    createElement(".app-user").style.display = "none";
    createElement(".disconnect").style.display = "none";
    createElement(".action-btn .connect").style.display = "block";
  };

  const connect = async () => {
    createElement(".action-btn .connect").style.display = "none";
    createElement(".waiting-to-connect").style.display = "block";
    await VeridaHelpers.connect();
    if (!VeridaHelpers.context) {
      createElement(".waiting-to-connect").style.display = "none";
      createElement(".action-btn .connect").style.display = "block";
    }
  };

  const setUserProfile = () => {
    const user = VeridaHelpers.profile;
    if (user.avatar) {
      createElement(".user-avatar").src = user.avatar;
    }
    if (user.name) {
      createElement(".user-name").innerHTML = user.name;
    }
    createElement(".app-user").style.display = "flex";
  };

  createElement(".disconnect").addEventListener("click", logout);

  createElement(".action-btn .connect").addEventListener("click", connect);

  // Listen for realtime change event

  VeridaHelpers.on("profileChanged", setUserProfile);

  VeridaHelpers.on("initialized", () => {
    setUserProfile();
    createElement(".waiting-to-connect").style.display = "none";
    createElement(".disconnect").style.display = "block";
  });
};
