import "./styles.css";
import linkIcon from "./assets/link.png";
import unlinkIcon from "./assets/Unlink.png";
import connectVault from "./connectVault";

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
        <img class="btn-image" src=${linkIcon} alt="connect" /><span>Connect</span>
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
  await connectVault.logout();
  createElement(".app-user").style.display = "none";
  createElement(".disconnect").style.display = "none";
  createElement(".action-btn .connect").style.display = "block";
};

const connect = async () => {
  try {
    createElement(".action-btn .connect").style.display = "none";
    createElement(".waiting-to-connect").style.display = "block";
    await connectVault.connect();
    setUserProfile();
    createElement(".disconnect").style.display = "block";
    createElement(".waiting-to-connect").style.display = "none";
  } catch (error) {
    createElement(".action-btn .connect").style.display = "block";
  }
};

const setUserProfile = () => {
  const user = connectVault.profile;
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
  }
};

// Listen for realtime profile change event

connectVault.on("profileChanged", setUserProfile);

createElement(".disconnect").addEventListener("click", logout);

createElement(".action-btn .connect").addEventListener("click", connect);

window.addEventListener("click", closeModal);
