const emp1 = {     // as 是 literalType 的声明
    name : {
        first : "my",
        last : "z",
    },
    gender : 'male' as 'male'|'female'|'other'|'unknow',
    salary :8000,
    bonus : undefined as (number | undefined),
    performance : 3.5,
    badges : ['摸鱼小王子', '懒狗'],
    updateBonus(): void{ //给对象绑定方法
        if (!this.bonus){
            this.bonus = this.salary * this.performance
         }
    }
}

emp1.updateBonus()
console.log(emp1)

//这里不能直接像js一样 emp1.bonus = 10000 ,必须先定义
if (!emp1.bonus){
    emp1.bonus = emp1.salary * emp1.performance
 }

emp1.gender = 'other'

const s :string = JSON.stringify(emp1)

console.log(s)  //vscode显示有问题(直接打obj) 实际上打印的是json , json.stringfy则没这个问题

console.log( `${emp1.name.last}${emp1.name.first} has a salary of ${emp1.salary}` )

//注意 json对象不能比较