const scores = document.querySelector('.scores-section__result');
const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');
const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'JXtYiaLm4miqbgKcY734';

const fetchGameData = async (url, gameId) => {
    try {
        console.log('hello')
        const data = await fetch(url + gameId + '/scores');
        console.log(data);
        const response = await data.json();
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }

}

export { URL, gameId, scores, refreshBtn, submitBtn, fetchGameData };