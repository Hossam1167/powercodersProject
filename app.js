/*Start User Date and User UI  */
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
];
// retrive the updated data from the user page and updating the users Informations.

let usersUpdated = JSON.parse(localStorage.getItem("users"));
users = usersUpdated;
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
        window.open("/user.html"); //Open user page
      } else {
        alert("Username or password doesn't match");
      }
    }
  });
});
//****************************************** */
