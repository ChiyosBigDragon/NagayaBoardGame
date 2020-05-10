import * as io from "socket.io-client";
const socket: SocketIOClient.Socket = io();

const roomForm: HTMLFormElement = <HTMLFormElement>document.getElementById("room-form");
const roomInput: HTMLInputElement = <HTMLInputElement>document.getElementById("room-input");
const messageForm: HTMLFormElement = <HTMLFormElement>document.getElementById("message-form");
const messageInput: HTMLInputElement = <HTMLInputElement>document.getElementById("message-input");
const ul: HTMLUListElement = document.querySelector("ul");

roomForm.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	socket.emit("enter", {room: roomInput.value, name: "千代大龍秀政"});
	roomInput.value = "";
});

messageForm.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	socket.emit("message", {msg: messageInput.value, name: "千代大龍秀政"});
	messageInput.value = "";
});

socket.on("message", (msg: string) => {
	console.log(msg);
	ul.insertAdjacentHTML("beforebegin", `<li>${msg}</li>`);
});