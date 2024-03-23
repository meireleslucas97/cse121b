/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {};

myProfile.name = "Francisco Lucas Meireles da Silva";
myProfile.photo = "images/profile.jpg";
myProfile.favoriteFoods = ['Pizza', 'Sushi', 'Barbecue', 'Feijoada'];
myProfile.hobbies = ['Reading', 'Playing Games', 'Watch Movies', 'Traveling'];
myProfile.placesLived = [

/* Populate Profile Object with placesLive objects */

{
    place: 'Fortaleza, CE - Brazil',
    length: '25 years'
  },
  {
    place: 'Beja, Portugal',
    length: '2 years'
  }
];

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('img').src = myProfile.photo;
document.querySelector('img').alt = `Profile image of ${myProfile.name}`;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.getElementById('favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.getElementById('hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.getElementById('places-lived').appendChild(dt);
    document.getElementById('places-lived').appendChild(dd);
});
