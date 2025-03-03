(function () {
  let form = document.querySelector("#contact_form");
  let emailInput = document.querySelector("#email");
  let messageInput = document.querySelector("#message");
  let topicInput = document.querySelector("#topic");

  function showErrorMessage(input, message) {
    let container = input.parentElement; // .input-wrapper

    // Check and remove existing errors if there is any
    let error = container.querySelector(".error-message");
    if (error) {
      container.removeChild(error);
    }

    // Add the error if the message isn’t empty
    if (message) {
      let error = document.createElement("div");
      error.classList.add("error-message");
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, "Email is a required field.");
      return false;
    }

    if (value.indexOf("@") === -1) {
      showErrorMessage(emailInput, "You must enter a valid email address.");
      return false;
    }

    if (value.indexOf(".") === -1) {
      showErrorMessage(emailInput, "You must enter a valid email address.");
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validateTopic() {
    let value = topicInput.value;

    if (!value) {
      showErrorMessage(topicInput, "Topic is a required field.");
      return false;
    }

    showErrorMessage(topicInput, null);
    return true;
  }

  function validatemessage() {
    let value = messageInput.value;

    if (!value) {
      showErrorMessage(messageInput, "message is a required field.");
      return false;
    }

    if (value.length < 36) {
      showErrorMessage(
        messageInput,
        "The message needs to be at least 36 characters long.",
      );
      return false;
    }

    showErrorMessage(messageInput, null);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidmessage = validatemessage();
    let isValidTopic = validateTopic();
    return isValidEmail && isValidmessage && isValidTopic;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert("Success!");
    }
  });

  emailInput.addEventListener("input", validateEmail);
  messageInput.addEventListener("input", validatemessage);
  topicInput.addEventListener("input", validateTopic);

  // THE RETURN STATEMENT HERE
})();
console.log("Hello, World!");
