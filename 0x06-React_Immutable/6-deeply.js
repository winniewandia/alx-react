const { Map } = require('immutable');

export default function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  return map1.mergeDeep(page2);
}
