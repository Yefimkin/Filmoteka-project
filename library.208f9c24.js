!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired76b;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired76b=a);var i={watchedBtnLibrary:document.querySelector(".watched-button"),queueBtnLibrary:document.querySelector(".queue-button")};i.watchedBtnLibrary.addEventListener("click",(function(){i.watchedBtnLibrary.classList.add("activeBtn"),i.queueBtnLibrary.classList.remove("activeBtn"),i.gallery.innerHTML="";var e=localStorageUtil.getWatched();console.log(e),e.map((function(e){return apiService.fetchAllInfoAboutFilm(e).then((function(e){renderWatchedList(e)}))}))})),i.queueBtnLibrary.addEventListener("click",(function(){i.watchedBtnLibrary.classList.remove("activeBtn"),i.queueBtnLibrary.classList.add("activeBtn"),i.gallery.innerHTML="",localStorageUtil.getQueue().map((function(e){return apiService.fetchAllInfoAboutFilm(e).then((function(e){renderQueueList(e)}))}))}));var u=a("bpxeT"),c=a("2TvXO"),o=a("kRR9w"),s=a("UL92Z"),l=a("5rOqX"),f=a("5xtVg"),d={filmList:document.querySelector(".films-list"),watchesBtn:document.querySelector(".watched-button"),queueBtn:document.querySelector(".queue-button")},p="watched",h="queue",v=new(0,o.FilmApiService);function L(){return m.apply(this,arguments)}function m(){return m=e(u)(e(c).mark((function t(){var n,r,a,i,o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=(0,s.readLocalStorage)(p),d.filmList.innerHTML="",n&&0!==n.length){t.next=5;break}return console.log("You have not watched films"),t.abrupt("return");case 5:return r=n.map(function(){var t=e(u)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),v.ID=n,e.next=4,v.fetchMovieByID();case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=8,Promise.all(r);case 8:return a=t.sent,t.next=11,v.fetchGenres();case 11:i=t.sent,o=i.genres,d.filmList.innerHTML=(0,l.default)(a,o);case 14:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function b(){return b=e(u)(e(c).mark((function t(){var n,r,a,i,o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=(0,s.readLocalStorage)(h),d.filmList.innerHTML="",n&&0!==n.length){t.next=5;break}return console.log("You have not watched films"),t.abrupt("return");case 5:return r=n.map(function(){var t=e(u)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.ID=n,e.next=3,v.fetchMovieByID();case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=8,Promise.all(r);case 8:return a=t.sent,t.next=11,v.fetchGenres();case 11:i=t.sent,o=i.genres,d.filmList.innerHTML=(0,l.default)(a,o);case 14:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}d.watchesBtn.addEventListener("click",L),d.queueBtn.addEventListener("click",(function(){return b.apply(this,arguments)})),d.filmList.addEventListener("click",f.default),L()}();
//# sourceMappingURL=library.208f9c24.js.map
