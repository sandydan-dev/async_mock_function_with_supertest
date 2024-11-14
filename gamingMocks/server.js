const { app, port } = require("./index");

app.listen(port, () => {
  console.log("Server Listening on port ", port);
});
