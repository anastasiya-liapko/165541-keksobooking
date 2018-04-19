'use strict';

(function () {
  var MAX = 8;
  var MIN_X = 300;
  var MAX_X = 900;
  var MIN_Y = 150;
  var MAX_Y = 500;
  var MIN_PRICE = 1000;
  var MAX_PRICE = 1000000;
  var MIN_ROOMS = 1;
  var MAX_ROOMS = 5;
  var MIN_GUESTS = 1;
  var MAX_GUESTS = 10;

  var getAvatar = function (max) {
    var avatar = [];
    for (var i = 0; i < max; i++) {
      avatar[i] = 'img/avatars/user' + '0' + (i + 1) + '.png';
    }
    return avatar;
  };
  // getAvatar(MAX);

  var titleArr = ['Большая уютная квартира',
    'Маленькая неуютная квартира',
    'Огромный прекрасный дворец',
    'Маленький ужасный дворец',
    'Красивый гостевой домик',
    'Некрасивый негостеприимный домик',
    'Уютное бунгало далеко от моря',
    'Неуютное бунгало по колено в воде'];

  var getTitle = function (max, arr) {
    var title = [];
    for (var i = 0; i < max; i++) {
      var number = Math.floor(Math.random() * arr.length);
      title[i] = arr[number];
    }
    return title;
  };
  // getTitle(MAX, titleArr);

  var getLocationX = function (minX, maxX) {
    var locationX = [];
    for (var i = 0; i < 8; i++) {
      locationX[i] = minX - 0.5 + Math.random() * (maxX - minX + 1);
      locationX[i] = Math.round(locationX[i]);
    }
    return locationX;
  };
  // getLocationX(MIN_X, MAX_X);

  var getLocationY = function (minY, maxY) {
    var locationY = [];
    for (var i = 0; i < 8; i++) {
      locationY[i] = minY - 0.5 + Math.random() * (maxY - minY + 1);
      locationY[i] = Math.round(locationY[i]);
    }
    return locationY;
  };

  // var getAddress = function (max, locationX, locationY) {
  //   var address = [];
  //   for (var i = 0; i < max; i++) {
  //     address[i] = '{{' + locationX[i] + '}}, {{' + locationY[i] + '}}';
  //   }
  //   return address;
  // };
  // getAddress(MAX, getLocationX(MIN_X, MAX_X), getLocationY(MIN_Y, MAX_Y));

  var getPrice = function (max, minPrice, maxPrice) {
    var price = [];
    for (var i = 0; i < max; i++) {
      price[i] = price[i] = minPrice - 0.5 + Math.random() * (maxPrice - minPrice + 1);
      price[i] = Math.round(price[i]);
    }
    return price;
  };
  // getPrice(MAX, MIN_PRICE, MAX_PRICE);

  var typeArr = ['palace',
    'flat',
    'house',
    'bungalo'];

  var getType = function (max, arr) {
    var type = [];
    for (var i = 0; i < max; i++) {
      var number = Math.floor(Math.random() * arr.length);
      type[i] = arr[number];
    }
    return type;
  };
  // getType(MAX, typeArr);

  var getRooms = function (max, minRooms, maxRooms) {
    var rooms = [];
    for (var i = 0; i < max; i++) {
      rooms[i] = minRooms - 0.5 + Math.random() * (maxRooms - minRooms + 1);
      rooms[i] = Math.round(rooms[i]);
    }
    return rooms;
  };
  // getRooms(MAX, MIN_ROOMS, MAX_ROOMS);

  var getGuests = function (max, minGuests, maxGuests) {
    var guests = [];
    for (var i = 0; i < max; i++) {
      guests[i] = minGuests - 0.5 + Math.random() * (maxGuests - minGuests + 1);
      guests[i] = Math.round(guests[i]);
    }
    return guests;
  };
  // getGuests(MAX, MIN_GUESTS, MAX_GUESTS);

  var checkinArr = ['12:00',
    '13:00',
    '14:00'];

  var getCheckin = function (max, arr) {
    var checkin = [];
    for (var i = 0; i < max; i++) {
      var number = Math.floor(Math.random() * arr.length);
      checkin[i] = arr[number];
    }
    return checkin;
  };
  // getCheckin(MAX, checkinArr);

  var checkoutArr = checkinArr;

  var getCheckout = function (max, arr) {
    var checkout = [];
    for (var i = 0; i < max; i++) {
      var number = Math.floor(Math.random() * arr.length);
      checkout[i] = arr[number];
    }
    return checkout;
  };
  // getCheckout(MAX, checkoutArr);

  var featuresArr = ['wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'];

  var photosArr = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  var offer = [];
  var createOffer = function (max, avatar, title, price, type, rooms,
      guests, checkin, checkout, features, photos, locationX, locationY) {

    for (var i = 0; i < max; i++) {
      offer[i] = {};
      offer[i].author = {};
      offer[i].author.avatar = avatar[i];

      offer[i].offer = {};
      offer[i].offer.title = title[i];
      offer[i].offer.address = locationX[i] + ', ' + locationY[i];
      offer[i].offer.price = price[i];
      offer[i].offer.type = type[i];
      offer[i].offer.rooms = rooms[i];
      offer[i].offer.guests = guests[i];
      offer[i].offer.checkin = checkin[i];
      offer[i].offer.checkout = checkout[i];
      offer[i].offer.features = features;
      offer[i].offer.description = '';
      offer[i].offer.photos = photos;

      offer[i].location = {};
      offer[i].location.x = locationX[i];
      offer[i].location.y = locationY[i];
    }
    return offer;
  };

  createOffer(MAX, getAvatar(MAX), getTitle(MAX, titleArr),
      getPrice(MAX, MIN_PRICE, MAX_PRICE), getType(MAX, typeArr),
      getRooms(MAX, MIN_ROOMS, MAX_ROOMS), getGuests(MAX, MIN_GUESTS, MAX_GUESTS),
      getCheckin(MAX, checkinArr), getCheckout(MAX, checkoutArr),
      featuresArr, photosArr, getLocationX(MIN_X, MAX_X), getLocationY(MIN_Y, MAX_Y));


  var map = document.querySelector('.map');
  map.classList.remove('map--faded');

  var mapPin = document.querySelector('template').content.querySelector('.map__pin');
  var mapPins = document.querySelector('.map__pins');

  var renderPin = function (arr) {
    var pinElement = mapPin.cloneNode(true);
    pinElement.style.left = arr.location.x + 'px';
    pinElement.style.top = arr.location.y + 'px';
    pinElement.querySelector('img').src = arr.author.avatar;
    pinElement.querySelector('img').alt = arr.offer.title;
    return pinElement;
  };

  var createPinList = function (arr) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arr.length; i++) {
      fragment.appendChild(renderPin(arr[i]));
    }
    mapPins.appendChild(fragment);
  };
  createPinList(offer);

  var mapCard = document.querySelector('template').content.querySelector('.map__card');

  var renderOffer = function (arr) {
    var offerElement = mapCard.cloneNode(true);
    offerElement.querySelector('.popup__title').textContent = arr[0].offer.title;
    offerElement.querySelector('.popup__text--address').textContent = arr[0].offer.address;
    offerElement.querySelector('.popup__text--price').textContent = arr[0].offer.price + '₽/ночь';
    offerElement.querySelector('.popup__type').textContent = arr[0].offer.type;
    offerElement.querySelector('.popup__text--capacity').textContent = arr[0].offer.rooms +
    ' комнаты для ' + arr[0].offer.guests + ' гостей';
    offerElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + arr[0].offer.checkin +
    ' , выезд до ' + arr[0].offer.checkout;
    offerElement.querySelector('.popup__photos').querySelector('img').src = arr[0].offer.photos[0];
    offerElement.querySelector('.popup__avatar').src = arr[0].author.avatar;
    map.appendChild(offerElement);
  };

  renderOffer(offer);
})();
