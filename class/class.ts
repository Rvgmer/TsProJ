{  //class's define  and extends
    class empolyee {   //与接口不同 接口只是描述 而类必须初始化变量 或者 constructor
        name: string
        salary: number
        private bonus?: number = 0 //默认public  要私有就private
        constructor(name: string, salary: number){
            this.name = name
            this.salary = salary
        }
        updateSalary(){
            if(!this.bonus){
                this.bonus = this.salary
            }
        }
        set Bonus(v: number){
            this.bonus = this.Bonus
        }
        get Bonus(){
            return this.bonus || 0   //get 必须 return number 所以或上一个0
        }
    }

    class Manager extends empolyee {
        private reporters: empolyee[] = [] 
        constructor( name: string, salary: number){   //这里
            super(name, salary)
            this.reporters = []
        }
        addReporter(e :empolyee){
            this.reporters.push(e)
        }
    }

    const emp1 = new empolyee('john', 8000)
    emp1.Bonus = 8000  //set
    emp1.Bonus      //get
    console.log( emp1  )

    const Manager1 = new Manager('m',12000)
    Manager1.addReporter( emp1 )
    console.log( Manager1)


    //每次多写一遍字段名字很烦  Ts提供了简便的方法 
    class newEmpolyee {       //构造方法中的参数会变成成员变量
        constructor(name: string, salary: number, private bonus?: number){
                      // 同样的  只写成员变量 也会默认生成一个constructer
        }
    }



}