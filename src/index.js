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
      height: `${y}px`
    });
    this.initPoints();

    map.on('zoomstart', () => {
      this.points.forEach(element => {
        // eslint-disable-next-line
        element.style.display = 'none';
      });
    });
    map.on('zoomend', () => {
      this.drawPoints();
    });
  },

  updateData(data) {
    // todo
    console.log(data, 'update data');
  },

  updateColor(color) {
    // todo
    console.log(color, 'update color');
  },

  initPoints() {
    this.points = this.positions.map(() => {
      const point = L.DomUtil.create('div', '', this.container);
      Object.assign(point.style, {
        position: 'absolute',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: 'red'
      });
      return point;
    });
    this.drawPoints();
  },

  drawPoints() {
    this.positions.forEach((position, idx) => {
      const { x, y } = this._map.latLngToLayerPoint(position);
      Object.assign(this.points[idx].style, {
        display: '',
        left: `${x}px`,
        top: `${y}px`
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
