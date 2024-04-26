var createCounter = function(init) {
    let val=init
    return{
        increment: ()=>{
            val+=1
            return val
        },
        reset:()=>{
            val=init
            return val
        },
        decrement: ()=>{
            val-=1
            return val
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */