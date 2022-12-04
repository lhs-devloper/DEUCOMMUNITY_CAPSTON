const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");
const message_form = room.querySelector("form");

room.hidden = true;

let roomName;

function addMessage(message){
  let ul = room.querySelector("ul");
  let li = document.createElement("li");
  li.innerText = message
  ul.appendChild(li);
}

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("join_room", input.value, showRoom);
  roomName = input.value;
  input.value = "";
}

const handleMessageSubmit = (event) => {
  event.preventDefault();
  const input = room.querySelector("input");
  const value = input.value
  socket.emit("chat message", input.value, roomName, ()=>{
    addMessage(`나: ${value}`)
  });
  input.value = "";
}

socket.on("welcome", ()=>{
  addMessage("someone joined")
})

socket.on("chat message", (msg)=> {
  // console.log(msg)
  addMessage(msg)
})
form.addEventListener("submit", handleRoomSubmit);
message_form.addEventListener("submit", handleMessageSubmit);