import React from 'react';
import '../app.css';


export default class Map extends React.Component {
	mapRef = React.createRef();
	state = {
		// The map instance to use during cleanup
		map: null,
	};

	componentDidMount() {
		// this.createMap(33.9, -83.3);
		this.getCoordinates();
	}

	//get coordinates from the window then push them to a new map
	getCoordinates = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
          // console.log(position)
					this.createMap(position.coords.latitude, position.coords.longitude);
				},
				(error) => this.setState({ error: error.message })
			);
		}
	};

	//
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
				//change map center locations and zoom here
				center: { lat: lat, lng: lng },
        zoom: 7,
				pixelRatio: window.devicePixelRatio || 1,
			}
		);

		//make the map responsive
		const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
		console.log(behavior);

		//add a marker to a map at user's lat/long position
    let icon = new H.map.Icon('FPFavicon.png');
    console.log(icon)
    
    let marker = new H.map.Marker({ lat: lat,  lng: lng }, {icon: icon});
		map.addObject(marker);

		//create a circle on the map for each park
		let trailCreek = new H.map.Circle(
			{ lat: 33.971687, lng: -83.357537 },
			3000
		);
		map.addObject(trailCreek);

		let morganFalls = new H.map.Circle(
			{ lat: 33.968742, lng: -84.379742 },
			3000
		);
		map.addObject(morganFalls);

		let elizabethPorterParkAndSprayground = new H.map.Circle(
			{ lat: 33.959884, lng: -84.540687 },
			3000
		);
		map.addObject(elizabethPorterParkAndSprayground);

		let westPaces = new H.map.Circle({ lat: 33.852656, lng: -84.365373 }, 3000);
		map.addObject(westPaces);

		let brownwood = new H.map.Circle({ lat: 33.737831, lng: -84.346715 }, 3000);
		map.addObject(brownwood);

		const ui = H.ui.UI.createDefault(map, defaultLayers);
		console.log(ui);

		this.setState({ map });
	};

	componentWillUnmount() {
		// Cleanup after the map to avoid memory leaks when this component exits the page
		this.state.map.dispose();
	}

	render() {
		return (
			// Set a height on the map so it will display
			<div id="map" ref={this.mapRef} />
		);
	}
}