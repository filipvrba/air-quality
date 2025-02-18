import 'Net', '../../core/net'

export default class CDatabase
  def initialize(parent)
    @parent = parent
  end

  def air_quality_data(&callback)
    query = "SELECT * FROM air_quality WHERE aqi IS NOT NULL;"
    #lol

    Net.bef(query) do |rows|
      have_rows = rows && rows.length > 0

      if have_rows
        result = rows.map do |h|
          {
            aqi:   h.aqi,
            geo:   h.geo.split(','),
            name:  atob(h.name),
            utime: h.utime,
          }
        end

        callback(result) if callback
      end
    end
  end
end