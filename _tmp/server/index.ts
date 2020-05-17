// import * as express from "express";
// import * as http from "http";
// import * as socketio from "socket.io";
// import * as ioredis from "ioredis";
// require("dotenv").config();

// const app: express.Express = express();
// const httpServer: http.Server = http.createServer(app);
// const io: socketio.Server = socketio(httpServer);
// const db: ioredis.Redis = new ioredis(process.env.REDIS_URL);

// app.use(express.static("public"));

// const server = io.on("connection", (client: socketio.Socket) => {
// 	client.on("enter", (req: {room: string, name: string}) => {
// 		console.log(`${req.name} さんが入室（${req.room}）`);
// 		db.hmset(`${client.id}`, {room: req.room, name: req.name});
// 		server.to(req.room).emit("message", `${req.name} さんが入室（${req.room}）`);
// 		client.join(req.room);
// 	});
// 	client.on("message", (req: {msg: string, name: string}) => {
// 		console.log(`${req.name}: ${req.msg} from ${client.id}`);
// 		server.to(client.id).emit("message", `${req.name}: ${req.msg}`);
// 	});
// });

// httpServer.listen(5000, () => console.log("listening on *:5000"));
