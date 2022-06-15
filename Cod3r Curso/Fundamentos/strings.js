const escola = "Escola"

console.log (escola.charAt(4));
console.log (escola.charAt(7)); //Vazio
console.log (escola.charCodeAt(3)); //Unicode
console.log (escola.indexOf('a'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('School '.concat(escola).concat("!"));
console.log(escola.replace(3,'e'))
console.log(escola.replace(/\w/g, 'e'));

console.log('Ana,Maria,Pedro'.split(','));