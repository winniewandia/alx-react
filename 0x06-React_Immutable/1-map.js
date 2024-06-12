const { Map } = require('immutable');
export function getImmutableObject(object) {
    return Map(object);
}
