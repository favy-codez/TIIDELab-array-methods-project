let users = [
    {
    firstName : "Godsfavour",
    lastName : "Ezeliora",
    email : "ezeliorafavour81@gmail.com",
    profileImage : "images/img.jpg"
},
{
    firstName : "Oluebube",
    lastName : "Eze",
    email : "ezeliorafavour81@gmail.com",
    profileImage : "./images/img1.jpg"
},
{
    firstName : "Favour",
    lastName : "Madumere",
    email : "ezeliorafavour81@gmail.com",
    profileImage : "./images/img.jpg"
},
{
    firstName : "Nse",
    lastName : "Abraham",
    email : "ezeliorafavour81@gmail.com",
    profileImage : "./images/img1.jpg"
},
{
    firstName : "Nonso",
    lastName : "Ezeliora",
    email : "ezeliorafavour81@gmail.com",
    profileImage : "./images/img.JPG"
},
{
    firstName : "Obinna",
    lastName : "Eze",
    email : "ezeliorafavour81@gmail.com",
    profileImage : "./images/img1.JPG"
},
];

let usersContainer = document.getElementById("users");
let userBox = '';
users.forEach((user) => {
    userBox += ` <div class = "user">
    <img src="${user.profileImage}" alt="${user.firstName}">
    ${user.firstName} ${user.lastName}</div>
    `
    usersContainer.innerHTML = userBox;
});

function removeFirstUser(){

};

function removeLastUser(){

};