import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { IRON_LOGO } from '@/assets/images/svg/svg.js';

mapboxgl.accessToken = import.meta.env.VITE_MAPS_ACCESS_TOKEN;

// TODO: rename without "Create"
export default function CreateMap({
  longitude,
  latitude,
  mapContainerID,
  popupContent,
  customMarkerHTML = IRON_LOGO,
  mapScale = 15,
  markerDraggable = true,
  markerDragged = () => null,
}) {
  this.map = null;
  this.longitude = longitude;
  this.latitude = latitude;
  this.mapContainerID = mapContainerID;
  this.popupContent = popupContent;
  this.customMarkerHTML = customMarkerHTML;
  this.mapScale = mapScale;
  this.markerDraggable = markerDraggable;
  this.markerDragged = markerDragged;
}

CreateMap.prototype.render = function () {
  this.coordinates = [this.longitude, this.latitude];
  this.map = new mapboxgl.Map({
    container: this.mapContainerID, // container ID
    style: 'mapbox://styles/kulibabenko/clpcjefcu00bi01pg1wzxed96', // style URL
    center: this.coordinates, // starting position [lng, lat]
    zoom: this.mapScale, // starting zoom
  });
  return this.map;
};

CreateMap.prototype.getCoordinates = function () {
  return new Promise((resolve, reject) => {
    this.map.on('click', (e) => {
      this.typedCoordinates = {
        longitude: e.lngLat.wrap().lng,
        latitude: e.lngLat.wrap().lat,
      };
      resolve(this.typedCoordinates);
    });
  });
};

CreateMap.prototype.addMarker = function ({ longitude, latitude }) {
  this.coordArray = [longitude, latitude];
  this.marker = new mapboxgl.Marker({ draggable: this.markerDraggable })
    .setLngLat(this.coordArray)
    .addTo(this.map);
  console.log(this.marker);

  this.marker.on('dragend', () => {
    const { lng, lat } = this.marker.getLngLat();
    this.coordsAfterDrag = [lng, lat];
    this.markerDragged(lng, lat);
  });
};
CreateMap.prototype.readMarkerCoordinates = function () {
  this.map.on('dragend', () => {
    this.markerCoordinates = this.marker.getLngLat();
    console.log(this.markerCoordinates);
  });
};
CreateMap.prototype.setCoordinatesByClick = function () {
  this.map.on('click', (e) => {
    this.typedCoordinates = {
      longitude: e.lngLat.wrap().lng,
      latitude: e.lngLat.wrap().lat,
    };
    console.log(this.typedCoordinates);
    return this.typedCoordinates;
  });
};
