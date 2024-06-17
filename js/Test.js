var app = new Vue({
  el: "#app",
  data: {
    test: "Hello Vue!",
    message: "页面加载于 " + new Date().toLocaleString(),
    seen: true,
    bind: "滑鼠",
    todos: [{ text: "學習" }, { text: "知識" }, { text: "常識" }],
    onMessage: "Hello Vue.js!",
    modelMessage: "雙向綁定",
  },
  methods: {
    reverseMessage: function () {
      this.onMessage = this.onMessage.split("").reverse().join("");
    },
  },
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "蔬菜" },
      { id: 1, text: "奶酪" },
      { id: 2, text: "随便其它什么人吃的东西" },
    ],
  },
});
