import "../assets/styles/send-message.css";
import messageIcon from "../assets/images/message.png";
import statusIcon from "../assets/images/status_icon.png";
import VeridaHelpers from "../helpers/VeridaHelpers";

export const SendMessage = () => {
  document.getElementById("app").innerHTML = `
 <div>
   <form class="form-modal">
   <span id="message"> </span>
   <input disabled class="title-text" required type="text" placeholder="Enter User did (e.g: did:3:kjzl6cwe...)" />
    <textarea class="desc-text" required col="10" row="7">
    </textarea/>
    <div class="form-action">
      <div class="form-action-buttons">
        <a href="##">
        Clear
        </a>
        <button>
        Retrieve Encrypted
        </button>
      </div>
      <button class="send-message">
        <img class="btn-image" src=${messageIcon} alt="connect" /><span>Send </span>
      </button>
    </div>
   </form>
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
      createElement(".action-btn .connect").style.display = "none";
      createElement(".waiting-to-connect").style.display = "block";
      await VeridaHelpers.connect();
      createElement(".title-text").value = VeridaHelpers.did;
      createElement(".waiting-to-connect").style.display = "none";
      createElement(".form-modal").style.display = "flex";
    } catch (error) {
      createElement(".action-btn .connect").style.display = "block";
    }
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    const descData = createElement(".desc-text").value;

    if (!descData) {
      const messageElement = createElement("#message");
      messageElement.classList.add("error");
      messageElement.innerHTML = "All Fields are required !";
      return;
    }

    createElement(".form-modal").style.display = "none";
    createElement(".waiting-to-connect").style.display = "block";

    await VeridaHelpers.sendMessage(descData);
    createElement(".waiting-to-connect").style.display = "none";
    createElement(".message-status ").style.display = "flex";
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
  createElement(".send-message").addEventListener("click", sendMessage);

  window.addEventListener("click", closeModal);
};
