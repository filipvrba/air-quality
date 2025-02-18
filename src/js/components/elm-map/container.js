export default class CContainer {
  get lMap() {
    return this._lMap
  };

  constructor(states) {
    this._lMap = L.map("emContainer").setView(
      states.csCenter.geo,
      states.csCenter.zoom
    );

    let options = {attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"};
    L.tileLayer(CContainer.TILE_LAYER, options).addTo(this._lMap)
  }
};

CContainer.TILE_LAYER = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"