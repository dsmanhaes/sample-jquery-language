const languagesList = ['en-US', 'pt-BR'];
let currentLanguage;

function getLanguage() {
  $.ajax({
    url: '/languages/' + localStorage.getItem('language') + '.json',
    dataType: 'json', async: false, dataType: 'json',
    success: function (language) {
      currentLanguage = language;
      $('#title').prop('innerHTML', currentLanguage.title);
      $('#text').prop('innerHTML', currentLanguage.text);
    }
  });
}

function setLanguage(language) {
  document.documentElement.lang = language;
  localStorage.setItem('language', language);

  getLanguage();
}

$(document).ready(function () {
  if (localStorage.getItem('language') == null) {
    let language = navigator.language;
    console.log(language);
    if (!languagesList.includes(language)) {
      language = languagesList[0];
    }
    setLanguage(language);
  } else {
    getLanguage();
  }
});
