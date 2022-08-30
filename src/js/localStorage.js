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

  return arrIdMovie;
}

///////////////////////// Проверяет совпадения в Local Storage true/false // возвращает [filmID]
function checkIdInLocalStorage(keyName, filmID) {
  return readLocalStorage(keyName).includes(filmID);
}

////////////////////////////////// Добавляет в Local Storage
function addIdToLocalStorage(keyName, filmID) {
  let arrayId = [];
  let result;
  try {
    result = JSON.parse(localStorage.getItem(keyName));
  } catch (error) {}
  if (result) {
    arrayId = result;
  }
  arrayId.push(filmID);
  localStorage.setItem(keyName, JSON.stringify(arrayId));
}

////////////////////////////////// Удаляет из Local Storage
function removeIdFromLocalStorage(keyName, filmID) {
  localStorage.setItem(
    keyName,
    JSON.stringify(readLocalStorage(keyName).filter(item => item !== filmID))
  );
}

export {
  readLocalStorage,
  checkIdInLocalStorage,
  addIdToLocalStorage,
  removeIdFromLocalStorage,
};
