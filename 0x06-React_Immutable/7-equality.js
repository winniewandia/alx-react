const { Map } = require('immutable');
const Immutable = require('immutable');
export default function areMapsEqual(map1, map2) {
  return Immutable.is(map1, map2);
}
