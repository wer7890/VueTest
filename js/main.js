window.addEventListener('error', function (event) {
    console.log("監聽error");
});

window.onerror = (message,source,lineno,colon,error) => {
    console.log('onerror');
}


// Vue.component("cat", {
//     template: `
// <div><h1>Cat: </h1>
//   <slot></slot>
// </div>`,
//     props: {
//         name: {
//             required: true,
//             type: String
//         }
//     },
//     errorCaptured(err, vm, info) {
//         console.log('错误消息: ', err.message); // 错误消息
//         //console.log('堆栈跟踪: ', err.stack); 


//         console.log('組件名稱: ', vm.$options.name);
//         console.log('Root element: ', vm); // 组件的根元素

        
//         console.log('info: ', info);  //render: 错误是在渲染过程中发生的
//         return false;
//     }
// });

// Vue.component("kitten", {
//     template: "<div><h1>Kitten: {{ dontexist() }}</h1></div>",
//     props: {
//         name: {
//             required: true,
//             type: String
//         }
//     }
// });

// let vm = new Vue({
//     el: "#app"
// })








// let componentA = {
//     template: `<div>
//             <button @click="handleClick">第一層子組件觸發</button>
//         </div>`,
//     methods: {
//         handleClick() {
//             throw new Error('第一層子組件拋出錯誤');
//         },
//     },
// };



// let vm = new Vue({
//     el: '#app',
//     methods: {
//         handleClick() {
//             throw new Error('父組件拋出錯誤');
//         },
//     },
//     components: {
//         'component-a': componentA
//     },
//     errorCaptured(err, vm, info) {
//         console.log('err(错误对象):', err);
//         console.log('vm(组件):', vm);
//         console.log('info(字符串):', info);
        
//         return false; // 返回 false 以阻止错误继续传播 
//     }
// });