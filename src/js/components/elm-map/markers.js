export default class CMarkers {
  constructor(parent) {
    this._parent = parent
  };

  addOnMap(data) {
    for (let location of data) {
      let date = new Date(location.utime).toLocaleString("cs-CZ", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });

      let popupMessage = `${location.name}<br><br>Index znečištění: <strong>${location.aqi}</strong><br>Den záznamu: ${date}`;

      let circle = L.circle(location.geo, {
        color: this.getMarkerColor(location.aqi),
        fillColor: this.getMarkerColor(location.aqi),
        fillOpacity: 0.5,
        radius: 1_500
      }).addTo(this._parent.cContainer.lMap);

      circle.bindPopup(popupMessage)
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