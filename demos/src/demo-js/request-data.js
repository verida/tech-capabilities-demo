import "../assets/styles/store-schema-data.css";
import messageIcon from "../assets/images/message.png";
import statusIcon from "../assets/images/status_icon.png";
import SaveIcon from "../assets/images/pull_request.png";
import VeridaHelpers from "../helpers/VeridaHelpers";

export const RequestData = () => {
  document.getElementById("app").innerHTML = `
  <div>
    <form class="form-fields">
     <div class="form-fields-input">
    <div>
    <label>DID :</label>
    <input id="did" required class="did" type="text" />
    </div>
    </div> 
    <div class="form-input-action">
      <div>
      </div>
       <button type="submit" class="send-message">
          <img class="btn-image" src=${SaveIcon} alt="connect" />
          <span>Save Data </span>
        </button>
    </div>

    </form>
    <div class="message-status">
      <img class="btn-image" src=${statusIcon} alt="connect" />
      <h3>Data Saved</h3>
      <button class="close-message">
     close
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
          <img class="btn-image" src=${messageIcon} alt="connect" /><span>Request contact Details</span>
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
      createElement(".form-fields").style.display = "block";
    } catch (error) {
      console.log(error);

      createElement(".action-btn .connect").style.display = "block";
      createElement(".waiting-to-connect").style.display = "none";
    }
  };

  const requestData = async (event) => {
    createElement(".waiting-to-connect").style.display = "block";
    try {
      event.preventDefault();
      const userDID = createElement("#did").value;
      createElement(".form-fields").style.display = "none";
      await VeridaHelpers.requestUserData(userDID);
      createElement(".message-status ").style.display = "flex";
    } catch (error) {
      console.log({ error });
    } finally {
      createElement(".waiting-to-connect").style.display = "none";
    }
  };

  const closeMessage = () => {
    createElement(".form-fields").style.display = "block";
    createElement(".message-status ").style.display = "none";
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

  createElement(".form-fields").addEventListener("submit", requestData);
  createElement(".close-message").addEventListener("click", closeMessage);

  window.addEventListener("click", closeModal);
};
