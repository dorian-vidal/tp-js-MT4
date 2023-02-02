function char_rot(n, char) {
  let charCode = char.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) {
    // majuscule
    charCode = ((charCode - 65 + n) % 26) + 65;
  } else if (charCode >= 97 && charCode <= 122) {
    // minuscule
    charCode = ((charCode - 97 + n) % 26) + 97;
  }
  return String.fromCharCode(charCode);
}

function cesear(n, message) {
  let encryptedMessage = "";
  for (const char of message) {
    encryptedMessage += char_rot(n, char);
  }
  return encryptedMessage;
}

const message = "Bonjour tout le monde";
const shift = 2;

console.log(cesear(shift, message));
