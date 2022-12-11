  { //接口之 1-可选字段串联  2-非空断言 3-接口扩展
    interface Empolyee extends hasName{  //接口的扩展，类似于继承
        salary: number
    }

    interface hasName {
        name?: { 
            firstName?: string
            lastName: string
        }
    }


    function hasBadName(e: Empolyee){                
        //return e.name?.firstName?.startsWith('AAA')  // 可选字段串联，避免程序挂掉！ 避免挨个if else判断这个字段是不是为空
        //return e.name!.firstName!.startsWith('AAA') // 非空断言 ，加！后 编译器不再检查，后果自负
        return  e.name?.firstName?.startsWith('AAA')? true :false //我真聪明hhh 这样就避免了返回undefined 同意返回 false
    }                                                
    let e1: Empolyee = {
        salary : 8000
    }
    console.log(hasBadName(e1))

}