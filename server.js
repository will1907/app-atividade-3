import express from "express";
import path from "node:path";
 
const app = express();
const port = 3000;
 
const publicPath = path.join(import.meta.dirname, "public");
const pages = path.join(publicPath, "pages");
const assets = path.join(publicPath, "assets");
 
// definir uma rota para a pasta assets
app.use("/assets", express.static(assets));
 
app.get("/", function(req, res){
    res.sendFile(path.join(pages,"index.html"));
});
 
app.get("/cadastro", function(req, res){
    res.sendFile(path.join(pages,"cadastro.html"));
});
 
app.get("/login", function(req, res){
    res.sendFile(path.join(pages,"login.html"));
});
 
app.use(function(req, res){
    res.sendFile(path.join(pages,"404.html"));
});
 
app.listen(port, function () {
  console.log(`Rodando em http://localhost:${port}`);
});
 
 