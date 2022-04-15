import { updateUserUi } from "./functionalities";

const scores = document.querySelector('.scores-section__result');
const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');
const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'JXtYiaLm4miqbgKcY734';

const fetchGameData = async (url, gameId) => {
    try {
        const data = await fetch(url + gameId + '/scores');
        console.log(data);
        const response = await data.json();
        console.log(response)
        console.log(response.result)
        const results = response.result;
        updateUserUi(results);
        return response.result[0].user;
    } catch (error) {
        console.log(error);
    }
}

const postData = async (url, gameId, user, score) => {
    try {
        const data = await fetch(url + gameId + '/scores', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "user": `${user}`,
                "score": score
            }),
        });
    } catch (error) {
        console.log(error);
    }
}

export { URL, gameId, scores, refreshBtn, submitBtn, fetchGameData, postData };