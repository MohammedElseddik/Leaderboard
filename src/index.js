import './style.css';
import { URL, gameId, refreshBtn, submitBtn, fetchGameData } from './modules/API-services';
import { inputCheck } from './modules/functionalities.js';




submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    inputCheck();
})

refreshBtn.addEventListener('click', (event) => {
    event.preventDefault();
    fetchGameData(URL, gameId);
});
console.log(URL)