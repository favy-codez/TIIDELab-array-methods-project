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


let newUsersList = [
    {
    firstName : "Chinaza",
    lastName : "Ezechukwu",
    email : "ezeliorafavour81@gmail.com",
    profileImage : "images/img.jpg"
},
{
    firstName : "Anni",
    lastName : "Akpan",
    email : "ezeliorafavour81@gmail.com",
    profileImage : "./images/img1.jpg"
},
{
    firstName : "Helen",
    lastName : "Dike",
    email : "ezeliorafavour81@gmail.com",
    profileImage : "./images/img.jpg"
},
{
    firstName : "Ifeanyi",
    lastName : "Obum",
    email : "ezeliorafavour81@gmail.com",
    profileImage : "./images/img1.jpg"
},
{
    firstName : "Kelechukwu",
    lastName : "Ezeliora",
    email : "ezeliorafavour81@gmail.com",
    profileImage : "./images/img.JPG"
},
{
    firstName : "Ada",
    lastName : "Emma",
    email : "ezeliorafavour81@gmail.com",
    profileImage : "./images/img1.JPG"
},
];

// TARGET DOM ELEMENTS
let usersContainer = document.getElementById("users");
let newUsersOptions = document.getElementById("newUsers");

// RENDER USERS
renderUsers()


function renderUsers(){
    let userBox = '';
    let newUserBox = `<option>Select new user</option>`;

    users.forEach((user) => {
    userBox += ` <div class = "user">
    <img src="${user.profileImage}" alt="${user.firstName}">
    ${user.firstName} </div>
    `
    usersContainer.innerHTML = userBox;
});
newUsersList.forEach(user =>{
    newUserBox += `<option value="">${user.lastName} ${user.firstName}</option> `
    newUsersOptions.innerHTML = newUserBox;
})
}


function removeFirstUser(){
    // removes first item in the array and it retirns the returned item
    let removedUser = users.shift();
    alert(`${removedUser.firstName} has been removed, it's remaining ${users.length} users`);
    renderUsers();
};


function removeLastUser(){
    // removes last item in the array
    let removedUser = users.pop();
    alert(`${removedUser.firstName} has been removed, it's remaining ${users.length} users`);
    renderUsers();
};

// use if and if-else satement for 1 user and 2 users