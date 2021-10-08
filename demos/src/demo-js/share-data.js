import "../assets/styles/send-message.css";
import messageIcon from "../assets/images/message.png";
import statusIcon from "../assets/images/status_icon.png";
import VeridaHelpers from "../helpers/VeridaHelpers";

export const ShareData = () => {
  document.getElementById("app").innerHTML = `
 <div>
    <div class="message-status">
      <img class="btn-image" src=${statusIcon} alt="connect" />
      <h3>Message sent</h3>
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
          <img class="btn-image" src=${messageIcon} alt="connect" /><span>Send Message </span>
        </button>
      </div>
  </div>
`;

  const createElement = (type) => {
    return document.querySelector(type);
  };

  const connectToSendMessage = async () => {
    try {
      createElement(".message-status ").style.display = "none";
      createElement(".action-btn .connect").style.display = "none";
      createElement(".waiting-to-connect").style.display = "block";
      await VeridaHelpers.connect();
      const items = await VeridaHelpers.getDatastoreItems();
      if (items.length) {
        await VeridaHelpers.sendMessage(items[0], "New Contact info");
        createElement(".waiting-to-connect").style.display = "none";
        createElement(".message-status ").style.display = "flex";
      }
      createElement(".action-btn .connect").style.display = "block";
    } catch (error) {
      console.log("Error", { error });
      createElement(".action-btn .connect").style.display = "block";
    }
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

  createElement(".action-btn .connect").addEventListener(
    "click",
    connectToSendMessage
  );

  window.addEventListener("click", closeModal);
};
