import "../assets/styles/store-schema-data.css";
import messageIcon from "../assets/images/message.png";
import statusIcon from "../assets/images/status_icon.png";
import SaveIcon from "../assets/images/save.png";
import VeridaHelpers from "../helpers/VeridaHelpers";

export const StoreDataWithSchema = () => {
  document.getElementById("app").innerHTML = `
  <div>
    <form class="form-fields">
     <div class="form-fields-input">
    <div>
    <label>First name</label>
    <input id="firstName" required type="text" />
    </div>
    <div>
    <label>Last name</label>
    <input id="lastName" required type="text" />
    </div>
    <div>
    <label>Email</label>
    <input id="email" required class="email-id" type="email" />
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
      createElement(".form-fields").style.display = "block";
    } catch (error) {
      console.log(error);

      createElement(".action-btn .connect").style.display = "block";
      createElement(".waiting-to-connect").style.display = "none";
    }
  };

  const saveItem = async (event) => {
    event.preventDefault();
    const firstName = createElement("#firstName").value;
    const lastName = createElement("#lastName").value;
    const email = createElement("#email").value;
    createElement(".form-fields").style.display = "none";
    createElement(".waiting-to-connect").style.display = "block";

    const data = {
      email,
      firstName,
      lastName,
    };

    await VeridaHelpers.saveInDataStore(data);
    createElement(".waiting-to-connect").style.display = "none";
    createElement(".message-status ").style.display = "flex";
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

  createElement(".form-fields").addEventListener("submit", saveItem);
  createElement(".close-message").addEventListener("click", closeMessage);

  window.addEventListener("click", closeModal);
};
