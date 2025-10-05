// з reduce
function ipToNumber(ip = '192.168.1.10') {
    return ip.split('.')
    .map(Number)
    .reduce((acc, byte, index) => acc + (byte << ((3 - index) * 8)), 0);
}
console.log(ipToNumber());

// без reduce
function ipToNumber2(ip = '192.168.1.10') {
  const parts = ip.split('.');               
  const byte1 = Number(parts[0]) << 24;      
  const byte2 = Number(parts[1]) << 16;      
  const byte3 = Number(parts[2]) << 8;       
  const byte4 = Number(parts[3]);            

  return byte1 + byte2 + byte3 + byte4;    
}

console.log(ipToNumber2()); 