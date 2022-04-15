const scores = document.querySelector('.scores-section__result');
const name = document.querySelector('.nameInput');
const score = document.querySelector('.scoreInput');

const inputCheck = () => {
  if (name.value.trim() === '' || score.value.trim() === '') return undefined;
  return [name.value.trim(), score.value.trim()];
};

const updateUserUi = (results) => {
  scores.innerHTML = '';
  results.forEach((element) => {
    const scoreContainer = document.createElement('span');
    const { user, score } = element;
    scoreContainer.textContent = `${user}: ${score}`;
    scores.appendChild(scoreContainer);
  });
};

export { inputCheck, updateUserUi };