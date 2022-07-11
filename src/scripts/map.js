let myMap;

const init = () => {
    myMap = new ymaps.Map('map', {
    center: [55.752004, 37.576133],
    zoom: 16,
    controls: ["zoomControl"]
  });

  const coords = [
    [55.752004, 37.576133]
];

const myCollection = new ymaps.GeoObjectCollection({}, {
  draggable: false,
  iconLayout: 'default#image',
  iconImageHref: '../images/img/marker.svg' ,
  iconImageSize: [58, 73],
  iconImageOffset: [-3, -42]
});

coords.forEach(coord => {
  myCollection.add(new ymaps.Placemark(coord));
});

myMap.geoObjects.add(myCollection);

myMap.behaviors.disable('scrollZoom');

};

ymaps.ready(init);