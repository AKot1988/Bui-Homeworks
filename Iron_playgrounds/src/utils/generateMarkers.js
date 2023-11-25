import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { IRON_LOGO } from '@/assets/images/svg/svg.js';

export default function generateMarkers({
  places = [],
  map,
  popupContent,
  customMarkerHTML = IRON_LOGO,
}) {
  map.on('load', function () {
    places.forEach((place) => {
      const markerEl = document.createElement('div');
      // TODO: change icon
      markerEl.innerHTML = customMarkerHTML;
      markerEl.classList.add('map-page__marker');

      new mapboxgl.Marker(markerEl)
        .setLngLat(Object.values(place.coordinates))
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(popupContent)
        )
        .addTo(map);
    });
  });
}
