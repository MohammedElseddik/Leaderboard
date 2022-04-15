import { postData } from "./API-services";
import { URL, gameId, scores } from './API-services';

const name = document.querySelector('.nameInput');
const score = document.querySelector('.scoreInput');

const inputCheck = () => {
    if (name.value.trim() === '' || score.value.trim() === '') return
    postData(URL, gameId, name.value.trim(), score.value.trim())
}

export { inputCheck };