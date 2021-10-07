import "../assets/styles/store-schemaless-data.css";
import messageIcon from "../assets/images/message.png";
import statusIcon from "../assets/images/status_icon.png";
import VeridaHelpers from "../helpers/VeridaHelpers";

export const StoreSchemalessData = () => {
  document.getElementById("app").innerHTML = `
  <div>
    <form class="form-modal">
        <span id="message"> </span>
        <textarea class="desc-text"></textarea/>
        <button  type="submit" class="send-message">
          <img class="btn-image" src=${messageIcon} alt="connect" />
          <span>Save Data </span>
        </button>
    </form>
    <div class="status-action-buttons">
    <button  class="clear-input">
     Clear
    </button>
    <button class="retrieve-decrypted">
     Retrieve Decrypted
    </button>
  </div>
    <div class="message-status">
      <img class="btn-image" src=${statusIcon} alt="connect" />
      <h3>Data Saved</h3>
      <button class="retrieve-enrypted">
      Retrieve Encrypted
      </button>
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
          <img class="btn-image" src=${messageIcon} alt="connect" /><span>Store Data</span>
        </button>
      </div>
  </div>
`;

  const createElement = (type) => {
    return document.querySelector(type);
  };

  const connect = async () => {
    try {
      createElement(".action-btn .connect").style.display = "none";
      createElement(".waiting-to-connect").style.display = "block";
      await VeridaHelpers.connect();
      createElement(".waiting-to-connect").style.display = "none";
      createElement(".form-modal").style.display = "flex";
    } catch (error) {
      createElement(".action-btn .connect").style.display = "block";
    }
  };

  const saveItem = async (event) => {
    event.preventDefault();
    const descData = createElement(".desc-text").value.trim();
    createElement(".form-modal").style.display = "none";
    createElement(".waiting-to-connect").style.display = "block";
    const data = {
      text: descData,
    };

    await VeridaHelpers.saveInDatabase(data);
    createElement(".waiting-to-connect").style.display = "none";
    createElement(".message-status ").style.display = "flex";
  };

  const getEncryptedData = async () => {
    const data = await VeridaHelpers.getEncryptedData();
    createElement(".desc-text").value = data.payload;

    createElement(".message-status").style.display = "none";
    createElement(".send-message").style.display = "none";
    createElement(".status-action-buttons").style.display = "flex";
    createElement(".form-modal").style.display = "flex";
  };

  const clearInput = () => {
    createElement(".desc-text").value = "";
    createElement(".send-message").style.display = "flex";
    createElement(".status-action-buttons").style.display = "none";
  };

  const getDecryptedData = async () => {
    const data = await VeridaHelpers.getDecryptedData();
    createElement(".desc-text").value = data.text;
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

  createElement(".action-btn .connect").addEventListener("click", connect);

  createElement(".form-modal").addEventListener("submit", saveItem);

  createElement(".clear-input").addEventListener("click", clearInput);

  createElement(".retrieve-enrypted").addEventListener(
    "click",
    getEncryptedData
  );

  createElement(".retrieve-decrypted").addEventListener(
    "click",
    getDecryptedData
  );

  window.addEventListener("click", closeModal);
};
