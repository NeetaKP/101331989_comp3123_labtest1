const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = function(array){
    return new Promise((resolve, reject)=>{
        if(array.length > 0){
            strArr = array.filter((item)=>{return typeof item == "string"})
            if(strArr.length > 0){
                const strArr1 = strArr.map((item)=>
                    item.toLowerCase()

                );resolve(strArr1);
            }else{
                reject ("No string items in array")
            }

        }else{
            reject("Array does not contain items")
        }

    });

}

lowerCaseWords(mixedArray)
.then((msg)=>{console.log(msg)})
.catch((err)=>{
    console.log(err)
})

