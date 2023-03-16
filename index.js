// Write your solution here!
 const cats = ["Milo", "Otis", "Garfield"] 
 const destructivelyAppendCat = function(name){
  cats.push(name);
  return cats;
 }
 const destructivelyPrependCat = function(namee){
cats.unshift(namee);
return cats;
 }
const destructivelyRemoveFirstCat = function(value){
  cats.shift(value);
  return cats;
}
  const destructivelyRemoveLastCat = function(Garfield){
  cats.pop(Garfield);
  return cats;
  }
  function appendCat(nameee){
    return [...cats, nameee];
  }
  function prependCat(naming){
    return [naming, ...cats];
  }
  function removeLastCat(){
    return cats.slice(0, -1);
  }
 function removeFirstCat(){
  return cats.slice(1);
 }
