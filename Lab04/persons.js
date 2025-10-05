const persons = {
  stalin: { born: 1878, died: 1953 },
  shevchenko: { born: 1814, died: 1861 },
  khmelnitsky: { born: 1595, died: 1657 },
  tsoi: { born: 1962, died: 1990 },
  chikatilo: { born: 1936, died: 1994 },
  hitler: { born: 1889, died: 1945 },
  kennedy: { born: 1917, died: 1963 },
};
console.log(ages(persons));
// {
//   stalin: 75,
//   shevchenko: 47,
//   khmelnitsky: 62,
//   tsoi: 28,
//   chikatilo: 58,
//   hitler: 56,
//   kennedy: 46
// }

function ages(persons) {
    const result = {};
    Object.keys(persons).forEach(key => {
        result[key] = persons[key].died - persons[key].born;
    });
    return result;
}