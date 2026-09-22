const { randomBytes } = require('crypto');

function anotherInsecurePassword() {
  // GOOD: cryptographically secure random suffix
  var suffix = randomBytes(8).readBigUInt64BE(0).toString();
  var password = "sssAAAA" + suffix;
  return password;
}