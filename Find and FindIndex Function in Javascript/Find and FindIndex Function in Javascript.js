/ find method function 

var myArray = [1,2,3,4,5,6,7,8,91,23,45,67,89]

var result = myArray.find(function (value){
    return value == 67
})

console.log(result)

// findindex method function 
var result2 = myArray.findIndex(function(value){
    return value == 6
})
console.log(result2)


function mainFunction(myArray,callback){
    for (var i=0;i<myArray.length;i++){
        if (callback(myArray[i]))
        // if we need value 
        // return myArray[i]
        // if we need index number 
        return i

    }
}

var result = mainFunction(myArray,function(value){
    return value==89
})
console.log(result)



