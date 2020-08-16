import React from "react";
import "../app.css";

let setParkName; 
let setParkId;
let allLocations;

const handleSetPark = (name, setParkName, setParkId, allLocations) => {
  setParkName(name);
  const parkObj = allLocations.find((locationObj) => locationObj.name === name);
  setParkId(parkObj._id);
};
export default class Map extends React.Component {
  mapRef = React.createRef();
  state = {
    // The map instance to use during cleanup
    map: null,
  };

  componentDidMount() {
    setParkName = this.props.setParkName;
    setParkId = this.props.setParkId;
    allLocations = this.props.allLocations;
    // this.createMap(33.9, -83.3);
    this.getCoordinates();
  }

  //get coordinates from the window then push them to a new map
  getCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //
          this.createMap(position.coords.latitude, position.coords.longitude);
          console.log(position.coords);
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
        //change map center locations and zoom here
        center: { lat: lat, lng: lng },
        zoom: 9,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );

    //make the map responsive
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    console.log(behavior);

    //add a marker to a map at user's lat/long position
    let icon = new H.map.Icon("FPFavicon.png");
    // let userMarker = new H.map.Marker({ lat: lat, lng: lng }, { icon: icon });
    // map.addObject(userMarker);

    //create a draggable marker
    let dragMarker = new H.map.Marker(
      { lat: lat + 0.005, lng: lng + 0.005 },
      { volatility: true },
      { icon: icon }
    );
    dragMarker.draggable = true;
    map.addObject(dragMarker);

    //disable map drag ability while dragMarker is in use
    map.addEventListener(
      "dragstart",
      function (ev) {
        let target = ev.target,
          pointer = ev.currentPointer;
        if (target instanceof H.map.Marker) {
          let targetPosition = map.geoToScreen(target.getGeometry());
          target["offset"] = new H.math.Point(
            pointer.viewportX - targetPosition.x,
            pointer.viewportY - targetPosition.y
          );
          behavior.disable();
        }
      },
      false
    );
    // re-enable the default drag ability of the underlying map
    // when dragging has completed
    map.addEventListener(
      "dragend",
      function (ev) {
        let target = ev.target;
        if (target instanceof H.map.Marker) {
          behavior.enable();
          const markerLat = dragMarker.b.lat;
          const markerLng = dragMarker.b.lng;
          getDistanceToLocation(
            "Brownwood Park Recreation Center",
            brownwood,
            markerLat,
            markerLng
          );
          getDistanceToLocation(
            "Walker Park (formerly Trail Creek Park)",
            trailCreek,
            markerLat,
            markerLng
          );
          getDistanceToLocation(
            "Morgan Falls Overlook Park",
            morganFalls,
            markerLat,
            markerLng
          );
          getDistanceToLocation(
            "Elizabeth Porter Park & Sprayground",
            elizabethPorterParkAndSprayground,
            markerLat,
            markerLng
          );
          getDistanceToLocation(
            "West Paces Park",
            westPaces,
            markerLat,
            markerLng
          );
        }
      },
      false
    );

    // Listen to the drag event and move the position of the marker
    // as necessary
    map.addEventListener(
      "drag",
      function (ev) {
        let target = ev.target,
          pointer = ev.currentPointer;
        if (target instanceof H.map.Marker) {
          target.setGeometry(
            map.screenToGeo(
              pointer.viewportX - target["offset"].x,
              pointer.viewportY - target["offset"].y
            )
          );
        }
      },
      false
    );

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

    //creating the geofences
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

    //finding the marker
    // console.log("marker");
    // console.log(dragMarker.b);

    //calculating the distance between 2 coordinates.

    function getDistanceToLocation(name, location, lat1, lng1) {
      //Haversine formula: https://en.wikipedia.org/wiki/Haversine_formula
      // console.log(location);
      let lat2 = location.b.lat;
      let lng2 = location.b.lng;
      const R = 3958.756; // Radius of the earth in mi
      const dLat = deg2rad(lat2 - lat1); // deg2rad below
      const dLon = deg2rad(lng2 - lng1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // Distance in mi
      // console.log(d + "mi");
      if (d < 1.87) {
        console.log("You can access notes at " + name);
        console.log(d + "mi");
        handleSetPark(name, setParkName, setParkId, allLocations);
      }
    }

    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }

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
