import { URL, gameId, scores, postData } from './API-services';

const submitForm = document.querySelector('.score-submit__form');
const name = document.querySelector('.nameInput');
const score = document.querySelector('.scoreInput');

const inputCheck = () => {
    if (name.value.trim() === '' || score.value.trim() === '') return
    postData(URL, gameId, name.value.trim(), score.value.trim());
    submitForm.reset();
}

const updateUserUi = (results) => {
    scores.innerHTML = '';
    for (let result of results) {
        const scoreContainer = document.createElement('span');
        const { user, score } = result;
        scoreContainer.textContent = user + ":" + score;
        scores.appendChild(scoreContainer);
    }
}

export { inputCheck, updateUserUi };