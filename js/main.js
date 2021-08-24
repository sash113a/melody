$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // переменная каждого отдельного этажа в SVG
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  var currentFlat = 0; //  переменная, где хранится текущая квартира
  var flatPath = $(".flats path"); // переменная каждой отдельной квартиры в SVG
  var allFlatWithLink = $(".flat-list .flat-item .flat-link"); // переменная, где хранится список квартир, квартиры и ссылка на квартиру
  var allFlat = $(".flat-list .flat-item"); // переменная, где хранится список квартир и квартиры
  var flatList = $(".flat-list"); // переменная, где хранится список квартир

  // функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
  });

  floorPath.on("click", toggleModle); // при клике на этаж вызвать окно
  viewFlatsButton.on("click", toggleModle); // при клике на кнопку вызвать окно
  modalCloseButton.on("click", toggleModle); // при клике на кнопку закрыть убирает окно

  // отслеживаем клик по кнопке вверх
  counterUp.on("click", function () {
    // проверяем значение этажа на максимум = 18
    if (currentFloor < 18) {
      currentFloor++; // увеличиваем значение этажа на 1
      // форматируем переменную с этажом (1 меняем на 01)
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  // отслеживаем клик по кнопке вниз
  counterDown.on("click", function () {
    // проверяем значение этажа на минимум = 1
    if (currentFloor > 2) {
      currentFloor--; // уменьшаем значение этажа на 1
      // форматируем переменную с этажом (1 меняем на 01)
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  // функция открыть/закрыть окно
  function toggleModle() {
    modal.toggleClass("is-open");
  }

  flatPath.on("mouseenter", highlightFlat); // при наведении на квартиру подсветить её справа
  flatPath.on("mouseleave", highlightFlat); // мышь покидает квартиру - убрать подсветку справа

  // при наведении на квартиру из списка, подсветить её на рисунке слева
  flatList.on("mouseenter", ".flat-item", highlightCurrentFlat);
  // мышь покидает квартиру из списка - убрать подсветку на рисунке слева
  flatList.on("mouseleave", ".flat-item", highlightCurrentFlat);

  // функция подсветить квартиру
  function highlightFlat() {
    currentFlat = $(this).attr("data-flat"); // получаем порядковый номер текущей кв. на этаже
    $(allFlatWithLink.eq(currentFlat - 1).toggleClass("flat-link-hover")); // подсвечиваем значение текущей кв. справа
  }

  // функция
  // при выборе квартиры из списка справа, она должна подсвечиваться на рисунке слева
  function highlightCurrentFlat() {
    currentFlat = allFlat.index(this) + 1; // получаем порядковый номер квартиры из списка справа
    $(`[data-flat=${currentFlat}]`).toggleClass("current-flat"); // находим и подсвечиваем квартиру на рисунке слева
  }
});
