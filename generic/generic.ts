{
    // generics 泛型   是用来约束参数的类型,所有的泛型后都可以不加 <>, 前提是编译器能够猜出来 泛型是什么类型的
    let arr: number[] 
    //等价于
    arr: Array<number>


    //之前我们见过的promise
    const p =  new Promise<number>((resolve,reject)=>{   // 类的泛型

    })

    interface hasWeight{
        weight: number
    }

    //自己实现一个 泛型
    class MyArray<T extends hasWeight>{  // 用 接口 约束泛型的类型    我不管你的T是什么  但是一定要有weight(实现hasWeight接口)
        data: T[] = []
        add(t: T){
            this.data.push(t)
        }
        map<U>(f: (t: T) => U ): U[]{   // 函数的泛型  第一眼看上去说不定人都晕了哈哈  还是看得不够多
            return this.data.map(f)
        }
        print(){
            console.log(this.data)
        }
        sortByWeight(){
            this.data.sort((a, b) => a.weight - b.weight)
        }
    }
    class WeightedNum{
        constructor(public weight: number){

        }
    }

    const a = new MyArray<WeightedNum>()
    a.add({weight: 1})
    a.add({weight: 3})
    a.add({weight: 2})
    a.print()
    //a.map<string>() // 我们可以告诉编译器，也可以不告诉 让编译器自己推断
    const b: string[] = a.map( (v)=> v.weight.toExponential() )
    console.log( b )

    a.sortByWeight()
    console.log( a.data )

}