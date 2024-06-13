const { fromJS } = require('immutable');

export default function accessImmutableObject(object, array) {
  const nested = fromJS(object);
  const value = nested.getIn(array);
  return value;
}
