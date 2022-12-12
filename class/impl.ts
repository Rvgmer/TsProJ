{
    //class  impl  interface  可以隐式的实现 也可以显式的实现
    //推荐！ 定义者 = 使用者 => 隐式实现   // 我的理解： 实现者随便写一个类  反正我都是要自己再定义一个接口  然后 【 as (需要的接口).方法 】来使用，所以实现者没必要显式实现一个接口
    //      定义者 = 实现者 => 显示实现   

    interface Empolyee {
        name: string
        salary: number
        bonus?: number
    }

    class emplImpl implements Empolyee{        //这里显式的实现以后 编译器会在写类的时候就提醒   
        name: string                           //不加的话也完全没问题！
        salary: number
        private allocatedbonus?: number = 0 
        constructor(name: string, salary: number){
            this.name = name
            this.salary = salary
        }
        updateSalary(){
            if(!this.allocatedbonus){
                this.allocatedbonus = this.salary
            }
        }
        set bonus(v: number){
            this.allocatedbonus = v
        }
        get bonus(){
            return this.allocatedbonus || 0   
        }
    }                                                  // 编译器会一个字段一个字段的比较  都符合就实现接口
    const emp1: Empolyee = new emplImpl('m', 12000)   

}