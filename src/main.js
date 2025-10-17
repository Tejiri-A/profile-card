import './style.css'

const currentTime = document.getElementById('currentTime');
currentTime.innerText = Date.now().toString();

const myDislikes = document.getElementById('myDislikes');
const myHobbies = document.getElementById('myHobbies');

const dislikes = ['Lateness','Noisy environments', 'Fake friendships'];
const hobbies = ['']