// 枚举类型  Notice 这个是Ts 特有的

enum HttpStatusCode {
    OK = 200,
    NotFound = 404,
    Internal_Server_Error = 500
}

function handle (s : HttpStatusCode){
    if (s === HttpStatusCode.OK) {
        console.log(' Is Ok')
    }else{
        console.log(' Bad Response')
    }
    console.log(s)  // 404
     // if I want to print NotFound
    // you just need to xxx[x]
    console.log(HttpStatusCode[s]) //NotFound
}

handle(HttpStatusCode.NotFound)

enum TimingFunction{
    LINEAR = 'linear',
    EASE = 'ease',
    EASE_IN = 'ease-in'
}
function animation(TimingFunction: 'linear'|'ease'|'ease-in'){
    console.log(TimingFunction)
}

animation(TimingFunction.EASE_IN)  //可以看到编译器是没有报错的   这说明 枚举 和 literal type 是一致的