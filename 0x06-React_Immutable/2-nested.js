const { fromJS } = require('immutable');

export default function accessImmutableObject(object, array) {
    nested = fromJS(object);
    return nested.getIn(array);
}
