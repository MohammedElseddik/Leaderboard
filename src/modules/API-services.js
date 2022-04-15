import { updateUserUi } from './functionalities.js';

const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');
const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'DHqPtHrqx3R4XrXb8LMY';

const fetchGameData = async (url, gameId) => {
  try {
    const data = await fetch(`${url + gameId}/scores`);
    const response = await data.json();
    const results = response.result;
    updateUserUi(results);
  } catch (error) {
    throw Error(error);
  }
};

const postData = async (url, gameId, user, score) => {
  try {
    await fetch(`${url + gameId}/scores`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: `${user}`,
        score,
      }),
    });
  } catch (error) {
    throw Error(error);
  }
};

export {
  URL, gameId, refreshBtn, submitBtn, fetchGameData, postData,
};