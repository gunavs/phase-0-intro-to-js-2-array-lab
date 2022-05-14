// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);
function destructivelyAppendCat(name) {
    cats.push(name)

}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop(cats.length)
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name) {
    const cat = [...cats,name];
    return cat;
        }
        //5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
      function prependCat(name){
            const cat = [name,...cats]
            return cat;
      }
       // 6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
      function removeLastCat() {
          const cat =cats.slice(0,cats.length-1)
          return cat;

      }
      //  7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
      function removeFirstCat() {
            const cat = cats.slice(1,cats.length)
            return cat;
      }
     //   8) removes the first cat from the cats array and returns a new array, leaving the ca