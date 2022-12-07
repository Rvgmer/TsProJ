 // 部分应用函数, 当第三方的函数跟我们的参数不匹配！
  function partiallyApply(f :(a :number, b:number)=> boolean, a :number){
    return (b :number) => f(a, b)
 }


 {
    const a = [1,2,3,4,5,6,7]
    console.log( a.filter((v) => v%2 === 0))

//---------------------------

    function isGoodNumber(goodFactor :number, v: number){
        return v % goodFactor === 0
    }

    function FilterArr(a :number[], f :(v :number) => boolean) {
        return a.filter(f)
    }
    
    //这时候 我们想把非常先进的 isGoodNumber 传进 FilterArr 但是isGoodNumber有两个参数  怎么办呢

    //config
    const Good_Factor = 2
    //end config

    // console.log( FilterArr(a, isGoodNumber) ) 这样肯定会报错 怎么办呢

    console.log( FilterArr(a, (v) => isGoodNumber(Good_Factor, v)) )  // 6666666666 !!! 部分应用函数

    
   

 }