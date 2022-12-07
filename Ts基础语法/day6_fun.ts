//函数

function add(a :number, b :number, c ?:number, d :number = 0, ...e :number[]) :number{
   //加？后 c的类型是 undefined | number  先判断才能用
   //也可以给形参加 ‘=’ 加默认值，没传进值时使用默认值
   // ...e :number[] 可变参数列表
   
   //写法 1 
   if (c) {
        return a + b + c
    }else{
        return a + b
    }
    //写法 2
   // return c ? a + b + c : a+b

    //写法 3  
    // return a + b +(c || 0)  

}
//同样类似于go的语法糖
const numbers = [1, 2, 3, 4, 5]
console.log( add(1, 2, 3, 4, ...numbers) )  //这里不加 ... 编译过不去

//老师的建议 函数参数过多， 传参传obj 确实不戳
function sendReq (parm :{
    url :string,
    methor : string,
    header :object,
    data ?: string,
    requireAuth :boolean,
    retry :boolean,
    retryTimeout :number,
}){
    console.log( JSON.stringify(parm) )
}

sendReq({                 //快捷键 trigger suggest  --- ctrl + i
    url :'www.baidu.com',
    methor : 'GET',
    header :{contentType : 'application/json'},
    data : '{}',
    requireAuth :false,
    retry : true,
    retryTimeout :10,
})

