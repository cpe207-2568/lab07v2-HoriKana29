document.addEventListener("DOMContentLoaded", () => {
  const firstNameInput = document.getElementById("first-name-input");
  const lastNameInput = document.getElementById("last-name-input");
  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const passwordConfirmInput = document.getElementById("password-confirm-input");

  const submitBtn = document.getElementById("submit-btn");
  const resetBtn = document.getElementById("reset-btn");

  // ✅ Simple email validation function (as you provided)
  function validateEmail(email) {
    const atPos = email.indexOf("@");
    const dotPos = email.lastIndexOf(".");
    return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
  }

  function setValidation(input, isValid) {
    if (isValid) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
    } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
    }
  }

  submitBtn.addEventListener("click", () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = passwordConfirmInput.value;

    let isFormValid = true;

    // First name validation
    setValidation(firstNameInput, firstName !== "");
    isFormValid = isFormValid && firstName !== "";

    // Last name validation
    setValidation(lastNameInput, lastName !== "");
    isFormValid = isFormValid && lastName !== "";

    // Email validation
    const emailValid = validateEmail(email);
    setValidation(emailInput, emailValid);
    isFormValid = isFormValid && emailValid;

    // Password validation
    const passwordValid = password.length >= 6;
    setValidation(passwordInput, passwordValid);
    isFormValid = isFormValid && passwordValid;

    // Confirm password validation
    const confirmValid = confirmPassword === password && passwordValid;
    setValidation(passwordConfirmInput, confirmValid);
    isFormValid = isFormValid && confirmValid;

    if (isFormValid) {
      alert(" Register Successfully");
    }
  });

  resetBtn.addEventListener("click", () => {
    const inputs = [
      firstNameInput,
      lastNameInput,
      emailInput,
      passwordInput,
      passwordConfirmInput,
    ];
    inputs.forEach(input => {
      input.value = "";
      input.classList.remove("is-valid", "is-invalid");
    });
  });
});
