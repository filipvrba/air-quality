import 'Net', '../../core/net'

export default class CDatabase
  def initialize(parent)
    @parent = parent
  end

  def air_quality_data(&callback)
    query = "SELECT * FROM air_quality WHERE aqi IS NOT NULL;"

    Net.bef(query) do |rows|
      have_rows = rows && rows.length > 0

      if have_rows
        result = []
        result = rows.map do |h|
          {
            aqi:   h.aqi,
            geo:   h.geo.split(','),
            name:  h.name.gsub("\n", '').decode_base64(),
            utime: h.utime,
          }
        end

        callback(result) if callback
      end
    end
  end
end