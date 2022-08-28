const refs = {
    watchedBtnLibrary: document.querySelector('.watched-button'),
    queueBtnLibrary: document.querySelector('.queue-button'),
}

refs.watchedBtnLibrary.addEventListener('click', showWatchedList);
refs.queueBtnLibrary.addEventListener('click', showQueueList);


function showWatchedList() {
  refs.watchedBtnLibrary.classList.add('activeBtn');
  refs.queueBtnLibrary.classList.remove('activeBtn');
  refs.gallery.innerHTML = '';
  const watchedArray = localStorageUtil.getWatched();
  console.log(watchedArray);

  watchedArray.map(id =>
    apiService.fetchAllInfoAboutFilm(id).then(response => {
      renderWatchedList(response);
    }),
  );
}

function showQueueList() {
  refs.watchedBtnLibrary.classList.remove('activeBtn');
  refs.queueBtnLibrary.classList.add('activeBtn');
  refs.gallery.innerHTML = '';
  const queueArray = localStorageUtil.getQueue();

  queueArray.map(id =>
    apiService.fetchAllInfoAboutFilm(id).then(response => {
      renderQueueList(response);
    }),
  );
}