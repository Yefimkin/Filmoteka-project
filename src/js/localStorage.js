// const idMovie = document.querySelector('.modal').dataset.id; // =  idMovie

function readLocalStorage(keyName) {
  let arrIdMovie = [];
  let result;
  try {
    result = JSON.parse(localStorage.getItem(keyName));
  } catch (error) {
    console.log(error);
  }
  if (result) {
    arrIdMovie = result;
  }
  console.log(arrIdMovie);
  return arrIdMovie;
}

///////////////////////// Проверяет совпадения в Local Storage // возвращает true/false
function checkIdInLocalStorage(keyName, idMovie) {
  return readLocalStorage(keyName).includes(idMovie);
}

////////////////////////////////// Добовляет в Local Storage
function addIdToLocalStorage(keyName, idMovie) {
  let arrayId = [];
  let result;
  try {
    result = JSON.parse(localStorage.getItem(keyName));
  } catch (error) {}
  if (result) {
    arrayId = result;
  }
  arrayId.push(idMovie);
  localStorage.setItem(keyName, JSON.stringify(arrayId));
}

////////////////////////////////// Удаляет из Local Storage
function removeIdFromLocalStorage(keyName, idMovie) {
  localStorage.setItem(
    keyName,
    JSON.stringify(readLocalStorage(keyName).filter(item => item !== idMovie))
  );
}
