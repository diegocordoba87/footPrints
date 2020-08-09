// src/DisplayMapClass.js
import React from 'react';

export default class Map extends React.Component {
	mapRef = React.createRef();
	state = {
		// The map instance to use during cleanup
		map: null,
	};

	componentDidMount() {
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
				center: { lat: 33.9, lng: -83.3 },
				zoom: 10,
				pixelRatio: window.devicePixelRatio || 1,
			}
		);

		const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
		const lineString = new H.geo.LineString();
		lineString.pushPoint({ lat: 33.9, lng: -83.3 });
		lineString.pushPoint({ lat: 33.6, lng: -83.6 });
		lineString.pushPoint({ lat: 33.3, lng: -83 });
		lineString.pushPoint({ lat: 33.9, lng: -83.3 });
		const polygon = new H.map.Polygon(lineString);
        map.addObject(polygon);
        const geometry = polygon.getGeometry();
        const wkt = geometry.toString;
        console.log(wkt);

		const ui = H.ui.UI.createDefault(map, defaultLayers);

		this.setState({ map });
	}

	componentWillUnmount() {
		// Cleanup after the map to avoid memory leaks when this component exits the page
		this.state.map.dispose();
	}

	render() {
		return (
			// Set a height on the map so it will display
			<div ref={this.mapRef} style={{ height: '500px' }} />
		);
	}
}
