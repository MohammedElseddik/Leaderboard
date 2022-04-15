import './style.css';
import { URL, gameId, scores, refreshBtn, submitBtn, fetchGameData } from './modules/API-services';




refreshBtn.addEventListener('click', (event) => {
    event.preventDefault();
    fetchGameData(URL, gameId);
});
console.log(URL)