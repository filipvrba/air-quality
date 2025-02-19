import 'CMarkers', '../components/elm-map/markers'
import 'CContainer', '../components/elm-map/container'
import 'CDatabase', '../components/elm-map/database'

export default class ElmMap < HTMLElement
  attr_reader :c_container

  STATES = {
    cs_center: {
      geo:  [49.8175, 15.4730],
      zoom: 7.9
    }
  }

  def initialize
    super

    init_elm()

    @c_container = CContainer.new(STATES)
    @c_markers   = CMarkers.new(self)
    @c_database  = CDatabase.new(self)
  end

  def connected_callback()
    @c_database.air_quality_data() do |data|
      @c_markers.add_on_map(data)
    end
  end

  def disconnected_callback()
  end

  def init_elm()
    template = """
    <div id='emContainer'></div>
    """

    self.innerHTML = template
  end
end