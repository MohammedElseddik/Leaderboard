const scores = document.querySelector('.scores-section__result');
const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');
const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const getIdKey = async (url) => {
    try {
        const data = await fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                "name": "My cool new game"
            }),
        });
        const response = await data.json();
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}




export { URL, scores, refreshBtn, submitBtn, getIdKey };