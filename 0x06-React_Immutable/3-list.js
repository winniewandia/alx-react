const { List } = require('immutable');

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  const list1 = List(list);
  const newList = list1.push(element);
  return newList;
  // return list.push(element);
}
