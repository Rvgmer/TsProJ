{  // 1.接口的并  2.类型断言
    interface WxBotton{
        visible: boolean
        enable: boolean
        onClick():void
    }   
    interface WxImage{
        visible: boolean
        src: string
        height: number
        width: number
    }

    //union of types  类型的并
    function hideElement(e : WxBotton|WxImage){
            e.visible = false          //里面的属性是他们共有的
    }

    function processElem(e: WxBotton|WxImage){
        //if e is WxBotton                     // x as xxx 这就是Ts中的断言
        // e.onclick
        //else
        // console.log(e.src)
        if ((e as any).onClick){     //告诉编译器，不要管我 把它当成any 它有onclick 那它就是btn
            const btn = e as WxBotton
            btn.onClick()
        } else{
            const img = e as WxImage
            console.log( img.src )
        }
    }

    processElem({
        visible:false,
        enable: false,
        onClick() {
            console.log('clicked')
        },
    })
    //还有一种很酷的写法，但感觉没啥用 todo...

}