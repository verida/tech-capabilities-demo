import "../assets/styles/connect.css";
import unlinkIcon from "../assets/images/unlink.png";
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
        <img class="btn-image" src=${unlinkIcon} alt="connect" /><span>Connect</span>
      </button>
      <button class="disconnect">
        <img class="btn-image" src=${unlinkIcon} alt="connect" /><span>Disconnect</span>
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
    try {
      createElement(".action-btn .connect").style.display = "none";
      createElement(".waiting-to-connect").style.display = "block";
      await VeridaHelpers.connect();
      setUserProfile();
      createElement(".disconnect").style.display = "block";
      createElement(".waiting-to-connect").style.display = "none";
    } catch (error) {
      console.log({ error });

      createElement(".action-btn .connect").style.display = "block";
    }
  };

  const setUserProfile = () => {
    const user = VeridaHelpers.profile;
    createElement(".user-name").innerHTML = user.name;
    if (user.avatar) {
      const parseAvatarValue = JSON.parse(user.avatar);
      const avatar = `data:image/${parseAvatarValue.format};base64,${parseAvatarValue.base64}`;
      createElement(".user-avatar").src = avatar;
    }
    createElement(".app-user").style.display = "flex";
  };

  const closeModal = (event) => {
    if (
      event.target.id === "verida-modal" ||
      event.target.id === "verida-modal-close"
    ) {
      createElement(".waiting-to-connect").style.display = "none";
      createElement(".action-btn .connect").style.display = "block";
    }
  };

  // Listen for realtime profile change event

  VeridaHelpers.on("profileChanged", setUserProfile);

  createElement(".disconnect").addEventListener("click", logout);

  createElement(".action-btn .connect").addEventListener("click", connect);

  window.addEventListener("click", closeModal);
};
