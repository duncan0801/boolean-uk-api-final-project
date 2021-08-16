const managerRouter = require("express").Router()

managerRouter.get("/", ()=>{})

managerRouter.get("/:id", ()=>{})

managerRouter.post("/", ()=>{})

managerRouter.patch("/:id", ()=>{})

managerRouter.delete("/:id", ()=>{})

module.exports = managerRouter