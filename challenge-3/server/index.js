const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3002",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // console.log(`User connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });

  app.get('/rooms', (req, res) => {
    const rooms = [
      {
        "id": 1,
        "name": "room from server"
      },
    ];
    const rooms2 = [...rooms2, data];
    res.send(rooms2);
  })
});

server.listen(3001, () => {
  console.log("server running");
});
