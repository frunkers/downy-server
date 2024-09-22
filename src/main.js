import fs from "fs";

export const main = (io) => {
	const onConnection = (socket) => {
		socket.on('login-data:send', (data) => {
			const usersRaw = fs.readFileSync('./src/databases/users.json').toString();
			const users = JSON.parse(usersRaw);
			let isValid = false;
			if (users[data.name] && users[data.name].password === data.password) {
				isValid = true;
			}
			socket.emit('is-valid-login-data:request', isValid);
			console.log(data, isValid);
		});
	};

	io.on("connection", onConnection);
};
