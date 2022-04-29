"use-strict";
/* Start Nav humberger icon */

const humIcon = document.querySelector(".nav-icon");
const navlist = document.querySelector(".nav-list");
humIcon.addEventListener("click", () => {
  navlist.classList.toggle("active");
});

/* End Nav humberger icon */
//###############################################
/*End User Date and User UI  */
let users = [
  {
    id: 1,
    firstname: "Hossam el din",
    lastname: "Baioumy",
    Balance: 4500,
    address: "Luegislandstrasse 51",
    password: "12345",
    username: "hossameldin.baioumy@gmail.com",
    EfinanceNumber: 518541891,
    Trasactions: [3, 4, 5],
  },
  {
    id: 2,
    firstname: "Ryan",
    lastname: "Baioumy",
    Balance: 6500,
    address: "Luegislandstrasse 595",
    password: "rsk1236",
    username: "ryan.baioumy@gmail.com",
    EfinanceNumber: 94894852988,
    Trasactions: [1, 2, 3],
  },
  {
    id: 3,
    firstname: "Test",
    lastname: "Powercoders",
    Balance: 7500,
    address: "pfingstweidstrasse 110",
    password: "test",
    username: "test@powercoders.org",
    EfinanceNumber: 9489480105101,
    Trasactions: [1, 2, 3],
  },
];
//data coming from the login page
let users1 = JSON.parse(localStorage.getItem("users"));
users = users1;

let currentUserIdStr = localStorage.getItem("id");
let currentUserId = parseInt(currentUserIdStr);

let transferAmount = document.getElementById("amount");
let accountNumber = document.getElementById("ibanAaccont");
let transferBtn = document.getElementById("transferBtn");

let currentUser = findUserById(currentUserId);
let transactionContainer = document.getElementById("transactionContanier");

updateUi();

//Fined the Current user by ID
function findUserById(id) {
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.id === id) {
      return user;
    }
  }
}
//Fined the  user by IBAN number
function findUserByIban(iban) {
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.EfinanceNumber === iban) {
      return user;
    }
  }
}

// Update UI
function updateUi() {
  let user = findUserById(currentUserId);
  let userNameinfo = document.getElementById("username"); //User Name HTML place holder
  let balanceinfo = document.getElementById("balance123"); // User Balance HTML place holder
  let visaCardName = document.getElementById("visaCardName"); // User name on the visa Card
  let userIbanNumber = document.querySelector("#userIbanNumber");
  let transactionAmmount = document.getElementById("transactionAmmount"); // transaction Ammount
  userNameinfo.innerHTML = ` ${user.firstname} ${user.lastname}`;
  balanceinfo.innerHTML = user.Balance;
  visaCardName.innerHTML = `${user.firstname} ${user.lastname}`;
  localStorage.setItem("users", JSON.stringify(users1));
  userIbanNumber.innerHTML = `My IBAN Number is <strong>${user.EfinanceNumber}</strong>`;
}

//Get the current User Balance
function getBalance(id) {
  let user = findUserById(id);
  let balance = user.Balance;
  return balance;
}

// TransferBtn on Action

transferBtn.addEventListener("click", () => {
  let amountToTransfer = parseInt(transferAmount.value);

  let targetUser = parseInt(accountNumber.value);
  transfer(targetUser, amountToTransfer);
  localStorage.setItem("users", JSON.stringify(users1));
  updateUi();
});

//transfer proccess
function transfer(targetUserIbanNumber, amount) {
  let currentUser = findUserById(currentUserId);
  let targetUser = findUserByIban(targetUserIbanNumber);
  currentUser.Balance -= amount;
  currentUser.Trasactions.push(-amount);
  targetUser.Balance += amount;
  targetUser.Trasactions.push(amount);
  location.reload();

  localStorage.setItem("users", JSON.stringify(users1));
}

//Get timestamp for transactions
//Get the today date
let dateStamp = function () {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = today.getDate();
  return (currentDate = `${date}/${month}/${year}`);
};

//Get the current time
let timeStamp = function () {
  let today = new Date();
  let hours = makeTwodigits(today.getHours());
  let minutes = makeTwodigits(today.getMinutes());
  let seconds = makeTwodigits(today.getSeconds());
  let times = `${minutes}:${hours}`;
  return times;
};
function makeTwodigits(number) {
  return number < 10 ? `0${number}` : number;
}

// Identify transaction type "Withdrawal / Deposit"

//Creat DOM element in the transactions Section

const creatTransactionNotifications = function (Trasactions) {
  let currentUser = findUserById(currentUserId);
  let date = dateStamp();
  let time = timeStamp();
  Trasactions = currentUser.Trasactions;

  Trasactions.forEach(function (value) {
    const type = value > 0 ? "deposit" : "Withdrawal";
    const transactionRow = `
    <li class="${type}">
            <div class="transaction-name-row">
              <h5 class="transactiontype">${type}</h5>
              <p class="transactiondate">at ${time}  on${date}</p>
              <p><strong class="transactionAmmount">${value}</strong>CHF</p>
            </div>
            <p>
    `;

    transactionContainer.insertAdjacentHTML("afterbegin", transactionRow);
    localStorage.setItem("users", JSON.stringify(users1));
  });
};
creatTransactionNotifications();

//Get Visa Expiry Date
let dateVisaExpir = function () {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear() + 5;

  return (currentDate = `${month}/${year}`);
};

//create a new card
let createNewCard = function (cardsliderContainer) {
  let expiryDate = dateVisaExpir();
  let cardSlider = document.querySelector(".Card-slider");
  cardsliderContainer = cardSlider;

  let visaNumber = Math.floor(Math.random() * 10000 + 1);
  let currentUser = findUserById(currentUserId);

  cardItemCreate = `<li class="visa-card-3">
    <h3 class="visanumber">${visaNumber} ${visaNumber} ${visaNumber} ${visaNumber}</h3>
    <h4 class="valid-number">
      Valid<br />
      THRU<strong>${expiryDate}</strong>
    </h4>
    <h3 class="user-name" id="visaCardName">${currentUser.firstname} ${currentUser.lastname}</h3>
  </li>`;
  cardsliderContainer.insertAdjacentHTML("afterbegin", cardItemCreate);
  localStorage.setItem("users", JSON.stringify(users1));
};

//Add eventLisneter

let addCardbtn = document.querySelector("#addCard");

addCardbtn.addEventListener("click", () => {
  let cardSlider = document.querySelector(".Card-slider");
  createNewCard();
  console.log(cardSlider);
});
