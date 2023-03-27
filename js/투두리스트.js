const memo = document.querySelector("#todo");
const form = document.querySelector("form");
const todoList = document.querySelector("#todolist");

const TODOS_KEY = "todos";

let toDos = [];   

        function saveToDos () {
        // 투두 배열이 const 값이면 값 자체가 변경 불가능함. 고로 let 변수
        // 로컬스토리지에서 저장되있던 투두스 키에 배열을 추가하는건데
        // 새로고침할때마다 투두 배열값을 빈값으로 초기화 시켜주면 
        // 빈값에서 추가되어서 기존값이 리셋되는게 당연함 (이건 나중에 배열에 값을 추가할떄 작동하는 함수)
        localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
        }

        function deleteTodo (e) {
          const li = e.target.parentNode;
          li.remove();
          toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
          saveToDos();
        }

        function paintToDo(newToDo) {
        let li = document.createElement("li");
        li.id = newToDo.id;
        let span = document.createElement("span");
        span.innerText = newToDo.text;
        let button = document.createElement("button");
        button.innerText = "X";
        button.addEventListener("click", deleteTodo)
        li.appendChild(span);
        li.appendChild(button); 
        todoList.appendChild(li);
        }

    function add (e) {
        e.preventDefault();
        const newToDo = memo.value;
        memo.value = "";
        const newTodoObj = {
          text: newToDo,
          id: Date.now()
        }
        toDos.push(newTodoObj);
        paintToDo(newTodoObj);
        saveToDos();
    }
        form.addEventListener("submit",add)

        const savedToDos = localStorage.getItem("todos");
        console.log(savedToDos); 
        
        // 이건 새로고침 하자마자 로컬스토리지 값 보고 실행하는 함수
        if(savedToDos != null) {
          const parsedToDos = JSON.parse(savedToDos);
          toDos = parsedToDos;
          // 배열 요소마다(item) 하나씩 실행시키는 함수
          parsedToDos.forEach(paintToDo);
        }