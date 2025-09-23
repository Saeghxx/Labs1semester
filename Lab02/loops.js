const numbres = {start: 15, end: 30};    
const output = {range: [], rangeOdd: []};

function countrange(start, end) {
  for (let i = start; i <= end; i++) {
    output.range.push(i);
    if (i % 2 !== 0) {
      output.rangeOdd.push(i);
    }
  }
}
countrange(numbres.start, numbres.end);
console.dir(output);