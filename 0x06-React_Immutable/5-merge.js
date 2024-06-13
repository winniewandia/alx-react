const { List, Map } = require('immutable')
export function concatElements(page1, page2) {
  return page1.concat(page2);
}

export function mergeElementsToList(page1, page2) {
  const list1 = Map(page1);
  const list2 = Map(page2);
  const list3 = list1.merge(list2);
  const list4 = List(list3);
  return list4.toJS();
}

// console.log(mergeElementsToList({ 1: 'Liam', 2: 'Noah' }, { 3: 'Elijah', 4: 'Oliver' }));
// console.log(concatElements([1, 2, 3], [4, 5, 6]));
