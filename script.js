const form = document.getElementById("form");

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaintDescription = document.getElementById("complaint-description");
const solutionDescription = document.getElementById("solution-description");

const messageBox = document.getElementById("message-box");

const complaintCheckboxes = document.querySelectorAll(
  '#complaints-group input[type="checkbox"]'
);

const solutionRadios = document.querySelectorAll(
  '#solutions-group input[type="radio"]'
);

const otherComplaint = document.getElementById("other-complaint");
const otherSolution = document.getElementById("other-solution");

const clearBtn = document.getElementById("clear-btn");


function validateForm() {
  const orderRegex = /^2024\d{6}$/;
  const productCodeRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;

  const complaintsGroupValid = Array.from(complaintCheckboxes).some(
    checkbox => checkbox.checked
  );

  const solutionsGroupValid = Array.from(solutionRadios).some(
    radio => radio.checked
  );

  return {
    "full-name": fullName.value.trim() !== "",
    "email": email.checkValidity(),
    "order-no": orderRegex.test(orderNo.value),
    "product-code": productCodeRegex.test(productCode.value),
    "quantity":
      Number.isInteger(Number(quantity.value)) &&
      Number(quantity.value) > 0,
    "complaints-group": complaintsGroupValid,
    "complaint-description":
      !otherComplaint.checked ||
      complaintDescription.value.trim().length >= 20,
    "solutions-group": solutionsGroupValid,
    "solution-description":
      !otherSolution.checked ||
      solutionDescription.value.trim().length >= 20
  };
}

function isValid(validationResults) {
  return Object.values(validationResults).every(
    result => result === true
  );
}

fullName.addEventListener("change", () => {
  const validationResults = validateForm();

  if (validationResults["full-name"]) {
    fullName.style.borderColor = "green";
  } else {
    fullName.style.borderColor = "red";
  }
});

email.addEventListener("change", () => {
  if (email.checkValidity()) {
    email.style.borderColor = "green";
  } else {
    email.style.borderColor = "red";
  }
});

orderNo.addEventListener("change", () => {
  const validationResults = validateForm();

  if (validationResults["order-no"]) {
    orderNo.style.borderColor = "green";
  } else {
    orderNo.style.borderColor = "red";
  }
});

productCode.addEventListener("change", () => {
  const validationResults = validateForm();

  if (validationResults["product-code"]) {
    productCode.style.borderColor = "green";
  } else {
    productCode.style.borderColor = "red";
  }
});

quantity.addEventListener("change", () => {
  const validationResults = validateForm();

  if (validationResults["quantity"]) {
    quantity.style.borderColor = "green";
  } else {
    quantity.style.borderColor = "red";
  }
});

complaintDescription.addEventListener("change", () => {
  const validationResults = validateForm();

  if (validationResults["complaint-description"]) {
    complaintDescription.style.borderColor = "green";
  } else {
    complaintDescription.style.borderColor = "red";
  }
});

solutionDescription.addEventListener("change", () => {
  const validationResults = validateForm();

  if (validationResults["solution-description"]) {
    solutionDescription.style.borderColor = "green";
  } else {
    solutionDescription.style.borderColor = "red";
  }
});

complaintCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const validationResults = validateForm();
    const complaintsGroup = document.getElementById("complaints-group");

    if (validationResults["complaints-group"]) {
      complaintsGroup.style.borderColor = "green";
    } else {
      complaintsGroup.style.borderColor = "red";
    }
  });
});

solutionRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const validationResults = validateForm();
    const solutionsGroup = document.getElementById("solutions-group");

    if (validationResults["solutions-group"]) {
      solutionsGroup.style.borderColor = "green";
    } else {
      solutionsGroup.style.borderColor = "red";
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validationResults = validateForm();
  const formValid = isValid(validationResults);

  if (!formValid) {
    if (!validationResults["full-name"]) {
      fullName.style.borderColor = "red";
    }

    if (!validationResults["email"]) {
      email.style.borderColor = "red";
    }

    if (!validationResults["order-no"]) {
      orderNo.style.borderColor = "red";
    }

    if (!validationResults["product-code"]) {
      productCode.style.borderColor = "red";
    }

    if (!validationResults["quantity"]) {
      quantity.style.borderColor = "red";
    }

    if (!validationResults["complaints-group"]) {
      document.getElementById("complaints-group").style.borderColor = "red";
    }

    if (!validationResults["complaint-description"]) {
      complaintDescription.style.borderColor = "red";
    }

    if (!validationResults["solutions-group"]) {
      document.getElementById("solutions-group").style.borderColor = "red";
    }

    if (!validationResults["solution-description"]) {
      solutionDescription.style.borderColor = "red";
    }

    return;
  }

  messageBox.textContent = "Form submitted successfully!";
});

clearBtn.addEventListener("click", () => {
  form.reset();

  fullName.style.borderColor = "";
  email.style.borderColor = "";
  orderNo.style.borderColor = "";
  productCode.style.borderColor = "";
  quantity.style.borderColor = "";
  complaintDescription.style.borderColor = "";
  solutionDescription.style.borderColor = "";

  document.getElementById("complaints-group").style.borderColor = "";
  document.getElementById("solutions-group").style.borderColor = "";

  messageBox.textContent = "";
});
