{
    //回调形式
    function add(a :number, b :number, callback :(res :number)=>void) :void{
        callback(a + b)
    }

    add(2,3, res =>{
        //console.log('2+3=',res)
    })

    //promise 加法
    function add2(a :number, b :number) :Promise<number>{
        return new Promise((resolve, reject) => {
            if(b %17 === 0){
                reject(`bad number:${b}`)
            }
            setTimeout(() => {
                resolve( a+b )
            }, 2000)
        })
    }
    //promise 乘法
    function mul(a :number, b :number): Promise<number>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(a * b)
            }, 2000);
        })
    }

    //promise的串联！ 不同于callback的地方，解决了 callback hell！
    add2(1,17).then(( res )=>{     
        console.log('1+2=', res)
        return add2(res, 3)
    }).then((res)=>{
        console.log('1+2+3=', res)
    }).catch(err => {
        console.log('caught errpr :',err)
    })

    add2(1,2).then(res => add2(res, 3)).then(res => add2(res, 4))
    .then(res => console.log('1+2+3+4 = finall res :', res))
    
    // 使用多个promise 计算（2+3）*（4+5）
    Promise.all([add2(2,3), add2(4,5)]).then((res)=>{  //同时执行，两个都出结果后 then
       //这里也可以 .then( ([a,b]) =>{}  )
        const [a, b] = res
        console.log(`2+3=${a},4+5=${b}`)
        return mul(a , b)
    }).then(res => {
        console.log(`(2+3)*(4+5)= ${res}`)
    })

    Promise.race([add2(2,3), add2(4,5)]).then((res)=>{ //只要有一个完成 就结束
        if (res === 5){
            console.log('2+3先算出来')
        }else{
            console.log('4+5先算出来')
        }
    })
}