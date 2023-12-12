import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { IRON_LOGO } from '@/assets/images/svg/svg.js';

mapboxgl.accessToken = import.meta.env.VITE_MAPS_ACCESS_TOKEN;

export default function createMap({
  longitude,
  latitude,
  mapContainerID,
  popupContent,
  customMarkerHTML = IRON_LOGO,
  mapScale = 15,
}) {
  const coordinates = [longitude, latitude];

  const map = new mapboxgl.Map({
    container: mapContainerID, // container ID
    style: 'mapbox://styles/kulibabenko/clpcjefcu00bi01pg1wzxed96', // style URL
    center: coordinates, // starting position [lng, lat]
    zoom: mapScale, // starting zoom
  });
  
  map.on('click', (e) => {
    const typedCoordinates = {
      longitude: e.lngLat.wrap().lng,
      latitude: e.lngLat.wrap().lat,
    };

    localStorage.setItem('coordinates', JSON.stringify(typedCoordinates));

    const typedDIVposition = {
      x: e.point.x,
      y: e.point.y,
    };

    localStorage.setItem('DIVposition', JSON.stringify(typedDIVposition));

  map.on('load', function () {
    const markerEl = document.createElement('div');
    markerEl.innerHTML = customMarkerHTML;
    markerEl.classList.add('map-page__marker');

    new mapboxgl.Marker(markerEl)
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(popupContent)
      )
      .addTo(map);
  });


    // console.log(typedCoordinates, typedDIVposition);
    // return typedCoordinates, typedDIVposition;
  });
}
