// Write your solution here!
const cats  = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return (cats.push(name));
}
destructivelyAppendCat(Kitty)

function destructivelyPrependCat(name) {
    return (cats.unshift(name));
}
destructivelyPrependCat(kitty)

function destructivelyRemoveLastCat() {
    return (cats.splice(-1));
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    return (cats.splice(0, 1));
}
destructivelyRemoveFirstCat();

function appendCat(name) {
   const copyOfCats= [...cats, name];
   return(copyOfCats);
}
appendCat(kitty);

function prependCat(name) {
    const copyOfCats= [name, ...cats];
    return(copyOfCats);
}
prependCat(kitty);

function removeLastCat() {
    const copyOfCats= cats.slice(0, 2);
    return(copyOfCats);
}
removeLastCat();

function removeFirstCat() {
    const copyOfCats= cats.slice(1);
    return(copyOfCats);
}
removeFirstCat();