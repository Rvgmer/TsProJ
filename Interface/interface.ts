{   // Ts中的接口 很像go的风格 struct + function 不需要声明 隐式的实现, 但是跟go不同的是 多一个字段都不认，所以最好在interface中加？。。。
    interface Empolyee {
        readonly name: string  //只读字段
        salary: number
        bonus?: number
        updataBonus?(p: number): void  //可以这么写  但不推荐这样用！ 因为如果不加？ 那么每实现一次 就要重复写一次updataBonus方法
    }

    const emp1: Empolyee = {
        name:'zhangsan',
        salary:8000
    }
    function updataBonus(e: Empolyee, p: number){
        if( !e.bonus){
            e.bonus = e.salary * p
        }
    }

    let emp2: Empolyee  
    //console.log(emp2)   //这种都编译不通过 因为Ts中的接口是 描述 ，仅仅是描述 必须 assign，分配内存空间 以后才能用这些
    //emp2.name = 'da'    
    
}