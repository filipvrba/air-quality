export default class CContainer
  TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'

  attr_reader :l_map

  def initialize(states)
    @l_map    = L.map('emContainer').set_view(states.cs_center.geo, states.cs_center.zoom)
    options = {
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/'>Carto</a>",
    }

    L.tile_layer(TILE_LAYER, options).add_to(@l_map)
  end
end