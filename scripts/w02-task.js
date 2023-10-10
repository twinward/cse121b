/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Tanner Winward'
let currentYear = new Date().getFullYear();
let profilePicture = "images/image_tanner.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("profilePicture");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ['BLT', 'French Fries', 'Pie'];
foodElement.textContent = favoriteFoods.join(', ')
const newFavoriteFood = 'Pizza';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;


favoriteFoods.shift();
foodElement.innerHTML = favoriteFoods.join('<br>');
favoriteFoods.pop();
foodElement.innerHTML = favoriteFoods.join('<br>');