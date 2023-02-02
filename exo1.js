class Parser {
  suffix = null;
  str = null;

  constructor(suffix) {
    this.suffix = suffix;
  }

  parse(phrase) {
    this.str = phrase;
    const allDigits = [];
    phrase.split(this.suffix).forEach((x) => {
      const xAsInt = parseInt(x);
      if (xAsInt) {
        allDigits.push(xAsInt);
      }
    });
    this.str = allDigits.join(" ");
  }
}

// result
let phrase = "8790: bonjour le monde:8987:7777:Hello World:    9007";
let p = new Parser(":");
p.parse(phrase);
console.log(p.str);

// result 2
phrase = "8790/ bonjour le monde/8987/7777/Hello World/    9007";
p = new Parser("/");
p.parse(phrase);
console.log(p.str);
