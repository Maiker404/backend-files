const multer = require("multer");
const routes = require("express").Router();
const multerConfig = require('./config/multer');


routes.post('/image',multer(multerConfig).single('file'),(req,res)=>{
    res.send(req.file);
});

module.exports = routes;