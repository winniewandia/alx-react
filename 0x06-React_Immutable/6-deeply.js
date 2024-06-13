const {Map, fromJS} = require('immutable');

export default function mergeDeeplyElements(page1, page2) {
    // const nested1 = fromJS(page1);
    // const nested2 = fromJS(page2);
    const map1 = Map(page1);
    // const map2 = Map(page2);
    return map1.mergeDeep(page2);
}

// const page1 = {
//     'user-1': {
//       id: 1,
//       name: 'test',
//       likes: {
//         1: {
//           uid: 1234,
//         }
//       }
//     },
//   };
  
//   const page2 = {
//     'user-1': {
//       likes: {
//         2: {
//           uid: 134,
//         }
//       }
//     },
//   };
  
// console.log(mergeDeeplyElements(page1, page2).toJS());
