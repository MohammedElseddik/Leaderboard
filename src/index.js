import './style.css';
import { URL, gameId, scores, refreshBtn, submitBtn, name, score, fetchGameData, postData } from './modules/API-services';




submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    postData(URL, gameId, name.value, score.value);
})

refreshBtn.addEventListener('click', (event) => {
    event.preventDefault();
    fetchGameData(URL, gameId);
});
console.log(URL)