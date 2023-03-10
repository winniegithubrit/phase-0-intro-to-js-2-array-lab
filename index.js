// Write your solution here!
function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}
function appendCat(name) {
  return [...cats,name];
}

const cats = ["Milo","Otis","Garfield"];
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function prependCat(name) {
  return[name, ...cats];
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function removeLastCat() {
  return cats.slice(0, -1);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}
function removeFirstCat() {
  return cats.slice(1);
}

