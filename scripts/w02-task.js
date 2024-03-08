/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

const fullName = "Francisco Lucas Meireles da Silva"; // Replace with your full name
const currentYear = new Date().getFullYear();
const profilePicture = 'images/profile.jpg';

/* Step 2 - Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 3 - Element Variables */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const favFoods = ['Pizza', 'Sushi', 'Barbecue'];
foodElement.innerHTML = favFoods.join('<br>');

const newFavoriteFood = 'Feijoada';
favFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

favFoods.shift();

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

favFoods.pop();

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;





