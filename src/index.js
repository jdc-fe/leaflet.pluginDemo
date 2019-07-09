
L.MyLayer = L.Layer.extend({
  // start|end = [lat, lng]
  initialize({ start, end }, { color = 'red' }) {
    this.start = start;
    this.end = end;
    this.color = color;
  },
  // layer api: https://leafletjs.com/reference-1.5.0.html#layer-onadd
  onAdd(map) {
    this._map = map;

    const container = L.DomUtil.create('div', 'leaflet-MyLayer-container');
    this.container = container;
    const { x, y } = this._map.getSize();
    Object.assign(container.style, {
      position: 'absolute',
      width: `${x}px`,
      height: `${y}px`,
      background: 'red'
    });
    this._map.getPane().overlayPane().appendChild(container);
  }
});

L.myLayer = function (data, options) {
  return new L.MyLayer(data, options);
};
