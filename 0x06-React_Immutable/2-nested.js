const { fromJS } = require('immutable');

export function accessImmutableObject(object, array) {
  nested = fromJS(object);
  return nested.getIn(array);
}
