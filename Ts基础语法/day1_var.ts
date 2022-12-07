//变量声明只用 let 和 const  而不要用var
//我们希望 如果变量后面不会变 我们一律使用const

let egStr: string = 'hello world m'
let egNum: number = 123
let egBoolean: boolean = false
console.log(egStr, egNum, egBoolean)

//literal type  一个很有趣的类型

let answer: 'yes'|'no'|'maybe' = 'maybe' //不仅可以说它是字符串，而且必须是这三种之一

let httpStatus: 200|404|500 = 200

//甚至可以

let httpStatus2: 200|'200'  //这时它的类型是   string|number

function f(s: string|number){  // union of types  类型的并集
    return s
}

f(httpStatus) //可以看出 确实是这酱紫

let a: any = 'abc'  // 梗之antScript,变量一旦声明any ,编译器会放弃所有类型检查，跟Js没区别了
a = 123
a.name = 'm'        // 不装了 我就是js
console.log(a.name , a.salary) // undefined undefined

let b: undefined  //一旦定义成undefined  就会永远成undefined
console.log(b)  //有啥用呢 ，比如answer 你也可以不回答  answer: 'yes'|'no'|'maybe'|'undefined'
