const list = document.querySelector(".list_items");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
let tasks = [];
render();

function render() {
  console.log("render");
  list.innerHTML = "";
  let out = "";
  tasks.forEach((t, i) => {
    return (out += `<li key=${t.id}> ${t.title} <button onclick="handleClickRemove(${i})">X</button></li>`);
  });
  list.innerHTML = out;
}

const handleClickAdd = (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (value) {
    tasks.push({
      id: tasks.length,
      title: value,
    });
  }
  input.value = "";
  render();
};

function handleClickRemove(index) {
  debugger;
  // delete tasks[index]; // Тогда у нас empty
  tasks = tasks.filter((t) => t.id !== index);
  render();
}
btn.addEventListener("click", handleClickAdd);
