// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
    return cats.push("Ralph")
}




function destructivelyPrependCat(name){
    return cats.unshift("Bob");

}



 function destructivelyRemoveLastCat(){
     return cats.pop()
 }

 destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
        cats.shift()
}

destructivelyRemoveLastCat();



function appendCat(name){
    const newArray = [...cats]
    newArray.push(name)
    return newArray
}

function prependCat(name){
    const newArray = [...cats]
    newArray.unshift(name)
    return newArray
}

function removeLastCat(){
    const newArray = [...cats]
    newArray.pop()
    return newArray
}

function removeFirstCat(){
    const newArray = [...cats]
    newArray.shift()
    return newArray
}