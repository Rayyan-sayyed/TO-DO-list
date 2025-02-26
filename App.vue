<template>
  <body>
  <div id="app">
    <h1 id="logo">Todo List</h1>
    <input class="in1" type="text" v-model="newTodo" placeholder="Add a todo" @keyup.enter="addTodo"/>
    <button class="but1" @click="addTodo()">Add</button>

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <div v-if="!todo.editing">
          <span :class="{ completed: todo.completed }">
            {{ todo.title }}
          </span>
          <button class="btn2" @click="editTodo(todo)">Edit</button>
          <button class="btn3" @click="deleteTodo(todo.id)">Delete</button>
          <button class="btn4" @click="toggleCompleted(todo)">
            {{ todo.completed ? "Undo" : "Complete" }}
          </button>
        </div>
        <div v-else>
          <input class="in2"
            type="text"
            v-model="todo.title"
            @keyup.enter="updateTodo(todo)"
          />
          <button class="btn5" @click="updateTodo(todo)">Update</button>
          <button class="btn6" @click="cancelEdit(todo)">Cancel</button>
        </div>
      </li>
    </ul>
  </div>
</body>
</template>

<script>
export default {
  name: "TodoApp",
  data() {
    return {
      newTodo: "",
      todos: [],
      nextId: 1,
    };
  },
  methods: {
    addTodo() {
      const title = this.newTodo.trim();
      if (title === "") return;
      this.todos.push({
        id: this.nextId++,
        title,
        completed: false,
        editing: false,
      });
      this.newTodo = "";
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    editTodo(todo) {
      todo.editing = true;
      todo.oldTitle = todo.title;
    },
    cancelEdit(todo) {
      todo.editing = false;
      todo.title = todo.oldTitle;
      delete todo.oldTitle;
    },
    updateTodo(todo) {
      if (todo.title.trim() === "") return;
      todo.editing = false;
      delete todo.oldTitle;
    },
    toggleCompleted(todo) {
      todo.completed = !todo.completed;
    },
  },
};
</script>

<style>
body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  justify-content: center;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#app {
  text-align: center;
  position: absolute;
  padding: 30px;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0 0 20px rgb(0, 0, 0);
}
h1 {
  font-family: cursive;
  margin-left: 162px;
    color: white;
    display: flex;
    position: absolute;
}
.in1 {
  font-size: large;
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
.but1{
  font-family: cursive;
  height: 62px;
  padding: 15px 42px;
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
  .btn2 {
      background: linear-gradient(45deg,  #d10000, #000000);
      border: none;
      border-radius: 50px;
      color: white;
      padding: 12px 30px;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 0 4px 15px rgba(240, 101, 149, 0.4);
      outline: none;
    } 
    .btn2:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(240, 101, 149, 0.4);
    }
    .btn2:active {
      transform: translateY(0);
      box-shadow: 0 4px 15px rgba(240, 101, 149, 0.4);
    }
  .btn3 {
      background: linear-gradient(45deg, #d10000, #000000);
      border: none;
      animation: glowingBackground 10s ease infinite;
      border-radius: 50px;
      color: white;
      padding: 12px 30px;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 0 4px 15px rgba(240, 101, 149, 0.4);
      outline: none;
    }
    @keyframes glowingBackground {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
    .btn3:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(240, 101, 149, 0.4);
    }
    .btn3:active {
      transform: translateY(0);
      box-shadow: 0 4px 15px rgba(240, 101, 149, 0.4);
    }
  .btn4 {
      background: linear-gradient(45deg, #d10000, #000000);
      animation: glowingBackground 10s ease infinite;
      border: none;
      border-radius: 50px;
      color: white;
      padding: 12px 30px;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 0 4px 15px rgba(240, 101, 149, 0.4);
      outline: none;
    }
    @keyframes glowingBackground {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
    .btn4:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(240, 101, 149, 0.4);
    }
    .btn4:active {
      transform: translateY(0);
      box-shadow: 0 4px 15px rgba(240, 101, 149, 0.4);
    }
    .btn5{
      background: linear-gradient(45deg, #d10000, #000000);
      border: none;
      animation: glowingBackground 10s ease infinite;
      border-radius: 50px;
      color: white;
      padding: 12px 30px;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 0 4px 15px rgba(240, 101, 149, 0.4);
      outline: none;
    }
    @keyframes glowingBackground {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.in2{
  font-size: large;
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
    .btn5:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(240, 101, 149, 0.4);
    }
    .btn5:active {
      transform: translateY(0);
      box-shadow: 0 4px 15px rgba(240, 101, 149, 0.4);
    }
    .btn6 {
      background: linear-gradient(45deg, #d10000, #000000);
      border: none;
      animation: glowingBackground 10s ease infinite;
      border-radius: 50px;
      color: white;
      padding: 12px 30px;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 0 4px 15px rgba(240, 101, 149, 0.4);
      outline: none;
    }
    @keyframes glowingBackground {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
    .btn6:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(240, 101, 149, 0.4);
    }
    .btn6:active{
      transform: translateY(0);
      box-shadow: 0 4px 15px rgba(240, 101, 149, 0.4);
    }
</style>



