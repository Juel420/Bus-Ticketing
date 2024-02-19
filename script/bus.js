function buyTicket() {
  hideElementById("header-section");
  showElementById("main-section");
}

// Get all <kbd> elements
const keyElements = document.querySelectorAll(".kbd");
const totalPriceElement = document.getElementById("seat-price");
const grandTotalElement = document.getElementById("grand-total");
const selectedSeatsList = [];

// Add click event listener to each <kbd> element
keyElements.forEach((key) => {
  key.addEventListener("click", (e) => {
    const seat = key.innerText;
    const clickedID = e.target.id;
    console.log(selectedSeatsList.length);

    if (selectedSeatsList.length >= 4) {
      alert("seat already fill up");
    } else if (
      selectedSeatsList.length < 5 &&
      !selectedSeatsList.includes(clickedID)
    ) {
      selectedSeatsList.push(clickedID);
      key.classList.add("bg-[#1DD100]");
      //  update seat
      const currentSeatElement = document.getElementById("current-seat");
      const currentSeatText = currentSeatElement.innerText;
      const currentSeat = parseInt(currentSeatText);
      const seatLeft = currentSeat - 1;
      currentSeatElement.innerText = seatLeft;
      // add buying seat
      const currentBuyingSeatElement = document.getElementById("buying-seat");

      const currentBuyingSeatText = currentBuyingSeatElement.innerText;

      const currentBuyingSeat = parseInt(currentBuyingSeatText);
      const addSeat = currentBuyingSeat + 1;
      currentBuyingSeatElement.innerText = addSeat;
      // append child
      const economyContainer = document.getElementById("economy-container");

      console.log(economyContainer);
      const div = document.createElement("div");
      div.classList.add("flex");
      div.classList.add("justify-between");
      const p = document.createElement("p");
      p.innerText = seat;
      div.appendChild(p);
      const p1 = document.createElement("p");
      p1.innerText = "Economy";
      div.appendChild(p1);
      const p2 = document.createElement("p");
      p2.innerText = "550";
      div.appendChild(p2);

      economyContainer.appendChild(div);
      // add price

      const totalPriceText = totalPriceElement.innerText;
      const updateTotalPrice = parseInt(totalPriceText);
      totalPriceElement.innerText = updateTotalPrice + 550;
      // const grandTotalElement = document.getElementById("grand-total");
      const grandTotalText = grandTotalElement.innerText;
      const grandTotalprice = parseInt(grandTotalText);
      grandTotalElement.innerText = grandTotalprice + 550;
    } else {
      alert("seat already added");
    }

    console.log(selectedSeatsList.length);
  });
});

const couponsArray = ["NEW15", "Couple 20"];

// Get references to form and input field
const form = document.getElementById("couponForm");
const inputField = document.getElementById("coupon");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(selectedSeatsList.length);

  const enteredCoupon = inputField.value.trim();

  if (selectedSeatsList.length === 0) {
    alert("select seats first");
  } else {
    if (couponsArray.includes(enteredCoupon)) {
      if (enteredCoupon === "NEW15") {
        const totalPrice = parseInt(totalPriceElement.innerText);
        const couponAmount = totalPrice * (15 / 100);
        grandTotalElement.innerText = totalPrice - couponAmount;
        console.log(couponAmount);
      } else if (enteredCoupon === "Couple 20") {
        const totalPrice = parseInt(totalPriceElement.innerText);
        const couponAmount = totalPrice * (20 / 100);
        grandTotalElement.innerText = totalPrice - couponAmount;
        console.log(couponAmount);
      }

      form.style.display = "none";
    } else {
      alert("Invalid coupon!");
    }
  }
});

//  show the success section
function clickNext() {
  hideElementById("main-section");
  showElementById("success-section");
}
