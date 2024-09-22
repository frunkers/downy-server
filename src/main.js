
export const main = (io) => {
	const onConnection = (socket) => {
		console.log(1);
		// audioSocketHandler(socket);
	};

	io.on("connection", onConnection);
};
