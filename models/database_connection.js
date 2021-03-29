const { Client } = require("cassandra-driver");

const client = new Client({
	cloud: {
	  secureConnectBundle: "C:\\Users\\avina\\Downloads\\secure-connect-todoapp.zip",
	},
	credentials: { username: "todouser", password: "todo@123" },
	keyspace: "todo"
});

module.exports=client;