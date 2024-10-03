const resolvedPromise = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success  = {'message':'delayed success'}
            resolve(success);
        })
    })

}
const rejectPromise = function(){
    return new Promise((resolve, reject)=>{
        let failure = {'error':'delayed exception!'}
        reject(failure)
    },500)
}

resolvedPromise()
.then((m)=>{
    console.log(m)
})
.catch((e)=>{
    console.log(e)
})

rejectPromise()
.then((m)=>{
    console.log(m)
})
.catch((e)=>{
    console.log(e)
})