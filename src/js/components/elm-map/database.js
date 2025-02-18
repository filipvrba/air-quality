import Net from "../../core/net";

export default class CDatabase {
  constructor(parent) {
    this._parent = parent
  };

  airQualityData(callback) {
    let query = "SELECT * FROM air_quality WHERE aqi IS NOT NULL;";

    return Net.bef(query, (rows) => {
      let result;
      let haveRows = rows && rows.length > 0;

      if (haveRows) {
        result = rows.map(h => ({
          aqi: h.aqi,
          geo: h.geo.split(","),
          name: atob(h.name),
          utime: h.utime
        }));

        if (callback) return callback(result)
      }
    })
  }
}