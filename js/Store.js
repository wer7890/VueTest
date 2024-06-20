const store = {
    state: {
        todos: [
            {id: 0, text: '写语文作业', done: false},
            {id: 1, text: '做数学卷子', done: false}
        ],
        name: 'aa'
    },
    addTodo(str){
        const obj = {text: str, done: false};
        this.state.todos.push(obj);
        console.log("有組件添加todos資料");
    },
    setDone(id){
        this.state.todos[id].done = true;
        console.log("有組件修改todos資料");
    }
}

const store2 = {
    state: {
        msg: '改動前',
    },
    setMsg(val){
        this.msg = val;
    },
    clearMsg(){
        this.msg = '';
    }
}




const store3 = {
    data: {  //data
        arr: ['國文', '英文'],
        count: 0
    },
    addArr(val) {
        this.data.arr.push(val);
    },
    popArr(){
        this.data.arr.pop();
    },
    addCount() {
        this.data.count++;
    }
}