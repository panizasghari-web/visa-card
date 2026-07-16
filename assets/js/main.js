// *************************** CARD NUMBER ***************************

let formNumber = document.getElementById("card-info-number");
let cardNumber = document.getElementsByClassName("card-number-write")[0];

formNumber.addEventListener("focus", (e) => {
  cardNumber.style.border = "1.5px solid white";
  cardNumber.style.borderRadius = "5px";
});

formNumber.addEventListener("blur", () => {
  cardNumber.style.border = "";
});

formNumber.addEventListener("input", (e) => {
  console.log(e.keyCode);

  if (e.keyCode != 8) {
    if (formNumber.value.length < 25) {
      if (
        formNumber.value.length === 4 ||
        formNumber.value.length === 11 ||
        formNumber.value.length === 18
      ) {
        formNumber.value += " - ";
      }
    } else {
      document.getElementById("card-info-holders").focus();
    }
  } else {
    if (
      formNumber.value.length === 21 ||
      formNumber.value.length === 14 ||
      formNumber.value.length === 7
    ) {
      formNumber.value = formNumber.value.slice(0, formNumber.value.length - 3);
    }
  }
  cardNumber.innerText = formNumber.value;
});

// *************************** CARD HOLDER ***************************

let formHolder = document.getElementById("card-info-holders");
let cardHolder = document.getElementsByClassName("card-holder-write")[0];

formHolder.addEventListener("focus", () => {
  cardHolder.style.border = "1.5px solid white";
  cardHolder.style.borderRadius = "5px";
  cardHolder.style.padding = "0 5px";
  formHolder.style.textTransform = "capitalize";
});

formHolder.addEventListener("blur", () => {
  cardHolder.style.border = "";
  cardHolder.style.padding = 0;
});

formHolder.addEventListener("keyup", (e) => {
  cardHolder.innerText = formHolder.value;
  cardHolder.style.textTransform = "capitalize";
});

// *************************** CARD EXPIRATION ***************************

let cardExpYear = document.getElementsByClassName("card-exp-write-year")[0];
let cardExpMonth = document.getElementsByClassName("card-exp-write-month")[0];

let formExpYear = document.getElementById("card-info-year");
let formExpMonth = document.getElementById("card-info-month");

formExpYear.addEventListener("focus", () => {
  cardExpYear.style.border = "1.5px solid white";
  cardExpYear.style.borderRadius = "5px";
});

formExpMonth.addEventListener("focus", () => {
  cardExpMonth.style.border = "1.5px solid white";
  cardExpMonth.style.borderRadius = "5px";
});

formExpYear.addEventListener("blur", () => {
  cardExpYear.style.border = "";
});

formExpMonth.addEventListener("blur", () => {
  cardExpMonth.style.border = "";
});

formExpYear.addEventListener("change", (e) => {
  cardExpYear.innerText = formExpYear.value;
});

formExpMonth.addEventListener("change", (e) => {
  cardExpMonth.innerText = formExpMonth.value;
});

// *************************** CARD CVV2 ***************************

let visaCard = document.getElementsByClassName("visa-card")[0];
let cardReverse = document.getElementsByClassName("visa-card-reverse")[0];
let cardCvv2 = document.getElementsByClassName("visa-card-cvv2-write")[0];
let formCvv2 = document.getElementById("card-info-cvv2");

formCvv2.addEventListener("focus", () => {
  visaCard.style.transform = "rotateY(180deg)";
  visaCard.style.perspective = "2000px";
  visaCard.style.transition = "1s";
  setTimeout(() => {
    cardReverse.style.display = "block";
  }, 300);
  cardCvv2.style.border = "1.5px solid white";
  cardCvv2.style.borderRadius = "5px";
});

formCvv2.addEventListener("blur", () => {
  visaCard.style.transform = "rotateY(0deg)";
  visaCard.style.perspective = "2000px";
  visaCard.style.transition = "1s";
  setTimeout(() => {
    cardReverse.style.display = "none";
  }, 300);
  cardCvv2.style.border = 0;
});

formCvv2.addEventListener("input", () => {
  if (formCvv2.value.length < 5) {
    cardCvv2.innerText = formCvv2.value;
  } else {
    formCvv2.value = formCvv2.value.slice(0, 4);
  }
});
