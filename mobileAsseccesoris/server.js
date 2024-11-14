const { app, port } = require("./index");

app.listen(port, () => {
  console.log("Server listening on port", port);
});
