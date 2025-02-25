<template>
  <body>
  <div class="con">
    <section class="sec">
      <div>
      <h1>To-Do List</h1>
      </div>
      <div>
      <img src="https://w7.pngwing.com/pngs/684/254/png-transparent-checklist-todo-list-thumbnail.png" alt="">
    </div>
      <input type="text" class="in1" v-model="inputTodo">
      <button class="but1" @click=" addTodo()">Add</button>
    </section>
    <ul v-for="todo in todoList" :key="todo.id">
      <li v-if="todo!=''">
        {{ todo }} 
        <input class="in2" type="checkbox" >
        <button class="but2" @click="() => deleteTodo(todo)">Delete</button>
      </li>
    </ul>
  </div>
</body>
</template>

<script>
export default {
  name:'App',

  data() {
    return{
      inputTodo:'',
      todoList: [''],
    }
  },
  methods: {
    addTodo() {
      this.todoList.push(this.inputTodo)
      this.inputTodo = ""
    },

    deleteTodo(todo) {
      const index = this.todoList.indexOf(todo)
      if (index > -1) {
        this.todoList.splice(1 , index)
      }
    }
  }
}
</script>

<style>
.con{
  text-align: center;
  position: absolute;
  padding: 30px;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0 0 20px rgb(0, 0, 0);
}
body {
  background: linear-gradient(45deg, #1300a0, #6f0e00, #58007e, #d1d57c);
  background-size: 400% 400%;
  animation: glowingBackground 10s ease infinite;
  color: white;
  font-family: Arial, sans-serif;
  justify-content: center;
}

@keyframes glowingBackground {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  text-align: center;
  text-shadow: 0 0 5px #ff3366, 0 0 10px #ff3366, 0 0 15px #ff3366, 0 0 20px #ff3366;
}
h1 {
  font-family: cursive;
  margin-left: 162px;
    color: white;
    display: flex;
    position: absolute;
}
img {
    filter: invert(100%);
    width: 55px;
    height: 50px;

}
.in1 {
    align-items: center;
    border: 1px solid white;
    background: rgba(204, 204, 204, 0.247);
    box-shadow: 4px 3px 5px rgba(255, 255, 255, 0.298);
    border-radius: 30px;
    padding-left: 20px;
    margin-bottom: 25px;
    width: 530px;
    height: 40px;
    margin-top: 10px;
}
.but1{
  font-family: cursive;
  padding: 15px 30px;
    font-size: 18px;
    color: #000000c0;
    background: rgb(255, 255, 255);
    border: 2px solid #ffffff;
    box-shadow: 4px 3px 5px rgba(0, 0, 0, 0.298);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}
.but1::before{
  content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(0, 224, 255, 0.3);
    transition: width 0.4s ease;
    z-index: -1;
}
.but1:hover::before {
    width: 100%;
  }
  .but1:hover {
    color: #000000;
  }
  ul{
    font-family:'Courier New', Courier, monospace;
    font-size: 22px;
    padding: 0px 8px 3px 20px;
    user-select: none;
    cursor: pointer;
    position: relative;
    margin: 4px;
    display: flex;
    color: white;
  }
  .in2{
  margin-left: 4px;
  margin-right: 10px;
  }
  .but2{
  font-family: cursive;
  padding: 4px 8px;
    font-size: 18px;
    color: #000000c0;
    background: rgb(255, 255, 255);
    border: 2px solid #ffffff;
    box-shadow: 4px 3px 5px rgba(0, 0, 0, 0.298);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}
</style>