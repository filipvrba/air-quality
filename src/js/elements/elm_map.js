import CMarkers from "../components/elm-map/markers";
import CContainer from "../components/elm-map/container";
import CDatabase from "../components/elm-map/database";

export default class ElmMap extends HTMLElement {
  get cContainer() {
    return this._cContainer
  };

  constructor() {
    super();
    this.initElm();
    this._cContainer = new CContainer(ElmMap.STATES);
    this._cMarkers = new CMarkers(this);
    this._cDatabase = new CDatabase(this)
  };

  connectedCallback() {
    return this._cDatabase.airQualityData(data => console.log(data))
  };

  disconnectedCallback() {
    return null
  };

  initElm() {
    let template = `${`\n    <div id='emContainer'></div>\n    `}`;
    return this.innerHTML = template
  }
};

ElmMap.STATES = {csCenter: {geo: [49.817_5, 15.473], zoom: 7}}