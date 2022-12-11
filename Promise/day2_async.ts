{  // async 和 await 是 promise的语法糖


    //promise 加法
    function add(a :number, b :number) :Promise<number>{
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

    async function calc (){    // 注意 await 只能在 async函数中使用   函数中返回会自动包装成promise<type>
       const a = await add(2, 3)
       console.log('2+3=',  a)
       const b = await add(3, 4)
       console.log('3+4=',  b)
       const res = await mul(a, b)
       return res
    }

    calc().then( (res) =>{
        console.log('finall res = '+res)
    } )
}