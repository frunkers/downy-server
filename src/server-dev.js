import { createServer } from "http";
import { Server } from "socket.io";
import { main } from "./main.js";

const httpServer = createServer();
const io = new Server(httpServer, {
	cors: {
		origin: ["http://localhost:3000"],
	},
});

main(io);
const PORT = 3003;
httpServer.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
