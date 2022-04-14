/*
Exercise 1 

Allow the user to input digits, afterwords sort and print them in numerical order.

*constrains:
 1- Input === digits 




















*/

"use-strict";

let user1 = {
  firstname: "Hossam",
  lastname: "Baioumy",
  Balance: 4500,
  address: "Luegislandstrasse 51",
  password: "12345",
  username: "hossameldin.baioumy@gmail.com",
};
//Displying the username and his Balance

const userName = document.getElementById("username");
const balance = document.getElementById("balance123");

userName.innerHTML = user1.firstname + " " + user1.lastname;
balance.innerHTML = user1.Balance;

//###############################################
