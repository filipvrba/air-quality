export default class CMarkers
  def initialize(parent)
    @parent = parent
  end

  def add_on_map(data)
    data.each do |location|
      circle = L.circle(location.geo, {
        color: get_marker_color(location.aqi),
        fillColor: get_marker_color(location.aqi),
        fillOpacity: 0.5,
        radius: 5000
      }).add_to(@parent.c_container.l_map)
      circle.bind_popup(data.popup)
    end
  end

  def get_marker_color(value)
    if value < 50
      return 'green';   # Low
    elsif value < 100
      return 'yellow';  # Middle
    elsif value < 150
      return 'orange';  # High
    else
      return 'red';     # Very high
    end
  end
end