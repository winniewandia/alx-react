const { Seq } = require('immutable');

export default function printBestStudents(object) {
    const seq = Seq(object);
    const filtered = seq.filter(student => student.score > 70);
    const capitalized = filtered.map(student => ({
      score: student.score,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));
    const result = capitalized.toJS();
    return result;
}
