const scores = document.querySelector('.scores-section__result');
const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('.nameInput');
const score = document.querySelector('.scoreInput');
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
        })
        console.log('helo')
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export { URL, gameId, scores, refreshBtn, submitBtn, name, score, fetchGameData, postData };