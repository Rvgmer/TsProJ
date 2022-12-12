{
    // generics 泛型   是用来约束参数的类型,所有的泛型后都可以不加 <>, 前提是编译器能够猜出来 泛型是什么类型的
    let arr;
    //等价于
    arr: Array;
    //之前我们见过的promise
    const p = new Promise((resolve, reject) => {
    });
    //自己实现一个 泛型
    class MyArray {
        constructor() {
            this.data = [];
        }
        add(t) {
            this.data.push(t);
        }
        map(f) {
            return this.data.map(f);
        }
        print() {
            console.log(this.data);
        }
        sortByWeight() {
            this.data.sort((a, b) => a.weight - b.weight);
        }
    }
    class WeightedNum {
        constructor(weight) {
            this.weight = weight;
        }
    }
    const a = new MyArray();
    a.add({ weight: 1 });
    a.add({ weight: 3 });
    a.add({ weight: 2 });
    a.print();
    //a.map<string>() // 我们可以告诉编译器，也可以不告诉 让编译器自己推断
    const b = a.map((v) => v.weight.toExponential());
    console.log(b);
    a.sortByWeight();
    console.log(a.data);
}
