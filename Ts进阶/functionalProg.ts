{ // functional programming
     // 函数作为“一等公民”
     // 变量类型可以是函数、
     // 值（litearl）可以是函数
     // 对象的字段可以是函数
     // 函数的参数可以是函数
     // 函数的返回值可以是函数

    let compareNumber = function(a :number, b: number){
        return a*a- b*b
    }

    // 简写 js中的箭头函数
    compareNumber = (a :number, b :number) => a-b

    let a = [1,3,-5,2,-4,6,8,0]
    
    a.sort(compareNumber)
    a.sort( (a :number, b :number) => {  //这里不写number 编译器也能猜出来 因为是在a里sort
        //console.log('comparing', a ,b)
        return  a-b
    } )

    console.log(a)   
    //-------------------------------
    const emp1 = {
        name : 'john',
        salary : '8000',
        increaseSalary1(){    //普通写法
            this.salary += 1000
        },
        increaseSalary2 : function(){ //体现函数式编程的写法，对象的字段可以是函数
            this.salary += 1000         //同样也可以写成箭头函数， 但是有一些坑
        }
    }
    //--------------------------------
    function createComparerWithLog() {         
        let time = 0              // 这就是闭包， 不退栈的局部变量
        return (a:number, b:number) => {
            time++
            console.log('比较次数'+time)
            return a-b
        }
    } 
    a.sort( createComparerWithLog() ) 
    //--------------------------------
    function createComparer( p :{smallerFirst :boolean}){  //传obj 别忘了给名字= =忘了好几次了，编译器会说声明了没有用到
        return p.smallerFirst ? (a :number, b :number) => a-b : (a :number, b :number) => b-a
    }
    a.sort( createComparer( {smallerFirst:false} ) ) 
    console.log( a )
    //-------------------------------

    //将传入的函数包装一下 增加打日志的功能， 体现了闭包， 传参是函数 返回还是 函数 !
    function loggingComparer(comp :(a: number, b: number) => number){
        let time = 0
        return (a :number, b :number) => {  // 返回一个函数 ，此函数调用 干活的函数并把参数原封不动送给它，同时干点别的
            time++                                                   // 所以这个函数和干活的函数  参数相同，返回值相同！
            console.log(`比较第${time}次`,a , b)
            return comp(a, b)
        }
    }
    a.sort(loggingComparer(compareNumber))
    console.log( a )

}