import './style.css';
import { URL, scores, refreshBtn, submitBtn, getIdKey } from './modules/API-services';




refreshBtn.addEventListener('click', getIdKey(URL));
console.log(URL)