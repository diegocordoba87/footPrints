import React from "react";
import "../app.css";
import JSZip from "jszip";
import Axios from "axios";

export default class Map extends React.Component {
  mapRef = React.createRef();
  state = {
    // The map instance to use during cleanup
    map: null,
  };

  componentDidMount() {
    //get user's coordinates and then creates a mat centralized on those coords
    this.getCoordinates();
    //function that checks to see if the user is inside fence

    //function that queries the db and finds all the notes at the location.
  }

  //get coordinates from the window then push them to a new map
  getCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
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
      apikey: "x0ctxWIBslUK51f47JpqheGPcD8W3VBNTS_ZoFNTJgo",
    });

    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,

      defaultLayers.vector.normal.map,
      {
        //change locations here
        center: { lat: lat, lng: lng },
        zoom: 12,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );
    //make the map responsive
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    //add a marker to a map at a given lat/long position
    const marker = new H.map.Marker({ lat: lat, lng: lng });
    map.addObject(marker);

    //create a circle on the map

    //create a geofence around a given set of coordinates
    let trailCreek = new H.map.Circle(
      { lat: 33.971687, lng: -83.357537 },
      6000
    );
    map.addObject(trailCreek);

    let morganFalls = new H.map.Circle(
      { lat: 33.968742, lng: -84.379742 },
      600
    );
    map.addObject(morganFalls);

    let elizabethPorterParkAndSprayground = new H.map.Circle(
      { lat: 33.959884, lng: -84.540687 },
      600
    );
    map.addObject(elizabethPorterParkAndSprayground);

    let westPaces = new H.map.Circle({ lat: 33.852656, lng: -84.365373 }, 600);
    map.addObject(westPaces);

    let brownwood = new H.map.Circle({ lat: 33.736785, lng: -84.346874 }, 400);
    map.addObject(brownwood);

    //convert the brownwood map circle to wkt format
    /* const brownwoodGeo = brownwood.getGeometry();
    const brownwoodWKT = brownwoodGeo.toString();
	console.log(brownwoodWKT); */
	
	async function postData(url, data) {
		const response = await fetch(url, {
		  method: "POST",
		  mode: "no-cors",
		  headers: {
			"Content-Type": "application/json"
		  },
		  redirect: "follow",
		  body: JSON.stringify(data)
		});
		console.log(response)
		return response.json();
	  }
	  const apiKey = "x0ctxWIBslUK51f47JpqheGPcD8W3VBNTS_ZoFNTJgo";
	  postData(`https://pos.ls.hereapi.com/positioning/v1/locate?apiKey=${apiKey}`, {
		"gsm": [{
		  "mcc": 262,
		  "mnc": 1,
		  "lac": 5126,
		  "cid": 21857
		}]
	  }).then(data => {
		console.log(data);
	  })

    //creating zip file to send to api
    /* const zip = new JSZip();
    zip.file("data.wkt", "NAME\tWKT\n" + "brownwood" + "\t" + brownwoodWKT);
    zip.generateAsync({ type: "blob" }).then((content) => {
      let formData = new FormData();
      formData.append("zipfile", content);
      const mapKey = "x0ctxWIBslUK51f47JpqheGPcD8W3VBNTS_ZoFNTJgo";
      Axios.post(
        "https://pos.ls.hereapi.com/positioning/v1/locate?apiKey=x0ctxWIBslUK51f47JpqheGPcD8W3VBNTS_ZoFNTJgo",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
          params: {
            apiKey: apiKey,
          },
        }
      ).then((result) => {
        console.log(result);
      }),
        (error) => {
          console.log(error);
        };
    }),
      (error) => {
        console.error(error);
      }; */

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
