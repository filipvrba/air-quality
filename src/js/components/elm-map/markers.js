export default class CMarkers {
  constructor(parent) {
    this._parent = parent
  };

  addOnMap(data) {
    for (let location of data) {
      let circle = L.circle(location.geo, {
        color: this.getMarkerColor(location.aqi),
        fillColor: this.getMarkerColor(location.aqi),
        fillOpacity: 0.5,
        radius: 5_000
      }).addTo(this._parent.cContainer.lMap);

      circle.bindPopup(data.popup)
    }
  };

  getMarkerColor(value) {
    if (value < 50) {
      return "green"
    } else if (value < 100) {
      return "yellow"
    } else if (value < 150) {
      return "orange"
    } else {
      return "red"
    }
  }
}