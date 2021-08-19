$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // переменная каждого отдельного этажа в SVG
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */

  // ункция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
  });
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
});
