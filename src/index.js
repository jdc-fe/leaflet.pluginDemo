L.MyLayer = L.Layer.extend({
  // data [{lat, lng}], style: { colore }
  initialize(positions, { color = 'red' }) {
    this.positions = positions;
    this.color = color;
  },
  // layer api: https://leafletjs.com/reference-1.5.0.html#layer-onadd
  onAdd(map) {
    this._map = map;
    const { overlayPane } = this._map.getPanes();
    const container = L.DomUtil.create(
      'div', 'leaflet-MyLayer-container', overlayPane
    );
    this.container = container;
    const { x, y } = this._map.getSize();
    Object.assign(container.style, {
      position: 'absolute',
      width: `${x}px`,
      height: `${y}px`,
      // background: 'rgba(255, 0, 0, .3)'
    });
    this.initPoints();
  },

  initPoints() {
    this.positions.forEach(({ lat, lng }) => {
      const point = L.DomUtil.create('div', '', this.container);
      const { x, y } = this._map.latLngToLayerPoint({ lat, lng });
      Object.assign(point.style, {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: 'red'
      });
    });
  },

  onRemove() {
    L.DomUtil.remove(this.container);
  }
});

L.myLayer = function (data, options) {
  return new L.MyLayer(data, options);
};
