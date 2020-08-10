// src/DisplayMapClass.js
import React from 'react';
import '../app.css';

export default class Map extends React.Component {
	mapRef = React.createRef();
	state = {
		// The map instance to use during cleanup
		map: null,
	};

	componentDidMount() {
		this.createMap(33.9, -83.3);
		this.getCoordinates();
	}

	getCoordinates = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.createMap(position.coords.latitude, position.coords.longitude);
				},
				(error) => this.setState({ error: error.message })
			);
		}
	};

	createMap = (lat, lng) => {
		const H = window.H;
		const platform = new H.service.Platform({
			apikey: 'x0ctxWIBslUK51f47JpqheGPcD8W3VBNTS_ZoFNTJgo',
		});

		const defaultLayers = platform.createDefaultLayers();

		// Create an instance of the map
		const map = new H.Map(
			this.mapRef.current,

			defaultLayers.vector.normal.map,
			{
				//change locations here
				center: { lat: lat, lng: lng },
				zoom: 10,
				pixelRatio: window.devicePixelRatio || 1,
			}
		);
		//make the map responsive
		const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

		//add a marker to a map at a given lat/long position
		const marker = new H.map.Marker({ lat: 33.98, lng: -83.28 });
		map.addObject(marker);

		//create a geofence around a given set of coordinates
		const lineString = new H.geo.LineString();
		lineString.pushPoint({ lat: 33.9, lng: -83.3 });
		lineString.pushPoint({ lat: 33.6, lng: -83.6 });
		lineString.pushPoint({ lat: 33.3, lng: -83 });
		lineString.pushPoint({ lat: 33.9, lng: -83.3 });
		const polygon = new H.map.Polygon(lineString);
		map.addObject(polygon);
		const geometry = polygon.getGeometry();
		const wkt = geometry.toString;

		const ui = H.ui.UI.createDefault(map, defaultLayers);

		this.setState({ map });
	};

	// componentWillUnmount() {
	//   // Cleanup after the map to avoid memory leaks when this component exits the page
	//   this.state.map.dispose();
	// }

	render() {
		return (
			// Set a height on the map so it will display
			<div id="map" ref={this.mapRef} />
		);
	}
}
