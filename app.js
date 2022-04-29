/*Start User Date and User UI  */
let users = [
  {
    id: 1,
    firstname: "John",
    lastname: "Tommy",
    Balance: 4500,
    address: "strasse 51",
    password: "12345",
    username: "john.tommy@gmail.com",
    EfinanceNumber: 95216143589932,
    Trasactions: [3, 4, 5],
  },
  {
    id: 2,
    firstname: "Roni",
    lastname: "Smith",
    Balance: 6500,
    address: "strasse 595",
    password: "8961236",
    username: "roni.smith@gmail.com",
    EfinanceNumber: 95216143588634,
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
// retrive the updated data from the user page and updating the users Informations.

let usersUpdated = JSON.parse(localStorage.getItem("users"));

//Update users informations
let update = function (users) {
  if (users !== usersUpdated) {
    users = usersUpdated;
    return users;
  }
};
update();

/* End User Date and User UI  */

let userNameEfinance = document.getElementById("username1236");
let password = document.getElementById("passwordFine");
let submitButton = document.getElementById("loginBtn1");
submitButton.addEventListener("click", () => {
  users.forEach(user => {
    if (
      user.username === userNameEfinance.value ||
      user.EfinanceNumber === Number(userNameEfinance.value)
    ) {
      if (user.password === password.value) {
        localStorage.setItem("id", user.id); //User ID to move to the next page
        console.log(localStorage.setItem("id", user.id));

        localStorage.setItem("users", JSON.stringify(users)); // Users Data object to move to the next page.
        window.open("./user.html"); //Open user page
      } else {
        alert("Username or password doesn't match");
      }
    }
  });
});
//****************************************** */
