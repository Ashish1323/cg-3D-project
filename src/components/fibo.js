let cache={}
const fibo = (n) =>{
    if(n in cache){
        return cache[n]
    }
    else{
        if(n<2){
        cache[n]=n
        return n
    }
    cache[n]=fibo(n-1) + fibo(n-2)
    return cache[n]
    }
    
}

console.log(fibo(13), cache)