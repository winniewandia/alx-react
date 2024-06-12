const { List, Map } = require('immutable')
export function concatElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const map3 = map1.concat(map2);
  return map3;
  // return map1.concat(map2).toJS();
  // return page1.concat(page2);
}

export function mergeElementsToList(page1, page2) {
  const list1 = List(page1);
  const list2 = List(page2);
  const list3 = list1.merge(list2);
  return list3;
}
