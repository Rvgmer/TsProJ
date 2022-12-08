{   //foreach 有副作用(单机)，但通俗易懂
    //map 和 reduce 无副作用，回调所以并发！

    const a = [ 1, 2, 4, 3]

    //方法一
    const b:number[] = []
    a.forEach( (v) =>{   //相当于一个精简的for循环
        b.push( v * v)
    })
    console.log(b)

    //方法二
    const c = a.map( v=> v*v)  // 对a中每个元素调用传入的方法 并返回新数组
    console.log(c)

    //想要获得a的平方和

    //方法一        
    let sum = 0
    b.forEach( v => sum+= v )
    console.log(sum)

    //方法二
    sum = b.reduce( (p,c) => p+c)
    console.log(sum)


     let evenSum = b.reduce((s,v) => {  //只加偶数
        if(v % 2 == 0){
            return s+v
        }
        return s  
     })
     console.log(evenSum)

     //eg: 这就是reduce函数！
     function reduce(n:number[], r:(s:number , v:number)=> number){
        let previousVal = 0
        n.forEach( currentVal => {
            previousVal = r(previousVal, currentVal)
        })
        return previousVal
     }


     // 一行很酷的代码！
     console.log(
        [1,2,3,4].map( v => v*v ).reduce( (p,c)=> p+c )
     )

}