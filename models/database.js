const { Client } = require("cassandra-driver");

async function run() {
  const client = new Client({
    cloud: {
      secureConnectBundle: "C:\\Users\\avina\\Downloads\\secure-connect-todoapp.zip",
    },
    credentials: { username: "todouser", password: "todo@123" },
    keyspace: "todo"
  });

  await client.connect();

  // Execute a query
  const rs = await client.execute("SELECT * FROM users");
  const userid = rs.rows[0].userid.toString();
  console.log(userid);
  console.log(`Your cluster returned ${rs.rowLength} row(s)`);
  // const ins = await client.execute("INSERT INTO task_by_users(userid, completed, body, taskid) VALUES (?, false, 'First task', uuid())", [userid], { prepare: true });
  // console.log(ins);
  const get_task_by_userid = await client.execute("SELECT * FROM task_by_users WHERE userid = ?", [userid], { prepare: true });
  const taskid = get_task_by_userid.rows[0].taskid.toString();
  const task_body = get_task_by_userid.rows[0].body;
  const completed = get_task_by_userid.rows[0].completed;
  console.log(taskid);
  console.log(task_body);
  console.log(completed);

  await client.shutdown();
}

// Run the async functionsecure-connect-todoapp.zip
run();