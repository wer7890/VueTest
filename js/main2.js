window.addEventListener('error', function (event) {
    console.log("監聽error");
});

window.onerror = (message,source,lineno,colon,error) => {
    console.log('onerror');
}


Vue.config.errorHandler = function (err, vm, info) {
    console.log('错误消息: ', err.message);
    console.log('堆栈: ', err.stack);
    console.log('組件名稱: ', vm.$options.name);
    console.log('vm: ', vm); 
    console.log('info: ', info);   //render: 错误是在渲染过程中发生的
}



Vue.component("component-a", {
    template: `
        <div><h1>component-a: </h1>
        <slot>預設值</slot>
    </div>`,
    props: {
        name: {
            required: true,
            type: String
        }
    },
});

Vue.component("component-b", {
    template: "<div><h1>component-b: {{ dontexist() }}</h1></div>",
    props: {
        name: {
            required: true,
            type: String
        }
    },
});

let vm = new Vue({
    el: "#app"
})

