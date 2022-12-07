 //数组

 let arr1: number[] = [1,2,3]
 console.log(arr1,typeof arr1)

 let arr2: (string|number)[] = [1, 2, '3']   //这时 arr2的类型是 (number|string)[] 注意要加括号
 console.log(arr2)

//数组通过下标访问 越界会 undefined
for (let i = 0; i < arr1.length; i++) {  //其实并不建议 建议使用函数 foreach之类
    const element = arr1[i];
    console.log(element)
}

let arr :number[] = []   //push和pop都是从尾部开始的
arr.push(1)
arr.push(2)
arr.push(3) //1 2 3
arr.pop() // 1 2
arr.push(4) // 1 2 4
console.log(arr)         //shift 和 unshift 从左边开始

arr = []
arr.unshift(1)
arr.unshift(2)
arr.unshift(3)
console.log(arr)  // 3  2  1

//这里其实可以 const arr: number[] = [] 不影响添加删除，个人理解为const的是数组的指针
//所以可以添加删除 但不能  arr = [] 

//切割出新数组 .slice
console.log(arr.slice(0 ,2))  //1 2 同样秉持着左闭右开这一规则
console.log(arr.slice(0))  //从第一个开始取到最后一个
//如果越界 会取到能取到的然后结束

//删除数组的一部分 .splice

console.log( arr.splice(0 ,1) ) //从第零个开始 删除1个元素  还会返回删除的元素

//同时 splice 还有第三个参数  可以放想加进去的元素 splice(0 ,1 ,4, 5, 6...)

console.log('index of 2 :' , arr.indexOf(2))  //return the index of el
arr.lastIndexOf(2) // 从右边开始查找
arr.indexOf(2, 0) //第二个参数指明从哪里开始查找

// 排序
arr.sort()  //大坑 是从字典序开始排序的

let arrb = ['dog','cat','pig']
arrb.sort()
console.log(arrb)

//元组 tuple
const tup_a = [1, 2, 3]
const [a1, a2] = tup_a
console.log(a1, a2)

// split / join 

console.log( 'a,b,c,d'.split(','))  //return []string
console.log( [1,2,3,4].join('') )  //return string