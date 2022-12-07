// 逻辑控制

// if 
function processHttpStatus_if(s: 200|404|500|'200'|'404'|'500'){
    // 把number 转化成 string
    let statusStr: string
    if(typeof s === 'number'){
        statusStr = s.toString()   //编译器很厉害，会判断出 进if的s一定是个number 会出number的方法
    }else{
        statusStr = s   //这里也是一样  else里的一定是string
    }
    console.log(statusStr)

    let statusNum: number
    if(typeof s === 'string'){
        statusNum =  parseInt(s)  //parseInt 第一个参数不谈，第二个可选参数是几进制的
    }else{
        statusNum = s
    }    
    //同样的 Ts支持三目表达式  这比go就舒服很多了 上面的可以写成：
    statusNum = typeof s === 'string'? parseInt(s):s
    
    //一律使用=== 以及 !==    除非你了解 == 和=== 区别
    if(s === 200){
        console.log('ok')
    }else if(s === 404){
        console.log('not found')
    }else if(s === 500){
        console.log('internal server err')
    }else if(s === "200"){
        console.log('ok')
    }else if(s === "404"){
        console.log('not found')
    }else if(s === "500"){
        console.log('internal server err')
    }
}

//switch
function processHttpStatus_swtich(s: 200|404|500|'200'|'404'|'500'){
    let status: number = typeof s === 'string' ? parseInt(s) : s 
    switch(status){
        case 200:
          console.log('ok')
          break     //这里和go刚好相反  不加break会执行下一个case ，而go 默认break 需要加fullthrough才执行下一个
        case 404:
            console.log('not found')
            break
        case 500:
            console.log('internal server err')
            break
        default:     //当然我们这里不需要 因为就这几种字段
            console.log('unknow err')
            break
    }
}

//for
let sum: number = 0
for (let i = 0; i < 100; i++) {    
    sum += i
}
console.log(sum)

//while
sum = 0
let i = 0
while(i < 100){
    sum += i
    i++
}
console.log(sum)

//try catch

for (let i = 0; i < 100; i++) {
    try{
        if (i === 25) {                 
            throw `bad number ${i}`    //这种写法只有``里才可以 ${}里 带变量
        }
    }catch(err){
        console.error(err)
    }
}
