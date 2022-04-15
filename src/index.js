import './style.css';
import { parseInt } from 'lodash';
import {
  URL, gameId, refreshBtn, submitBtn, fetchGameData, postData,
} from './modules/API-services.js';
import { inputCheck } from './modules/functionalities.js';

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  postData(URL, gameId, inputCheck()[0], parseInt(inputCheck()[1]));
});

refreshBtn.addEventListener('click', (event) => {
  event.preventDefault();
  fetchGameData(URL, gameId);
});