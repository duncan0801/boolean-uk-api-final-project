const fixtureRouter = require("express").Router()

fixtureRouter.get("/", ()=>{})

fixtureRouter.get("/:id", ()=>{})

fixtureRouter.post("/", ()=>{})

fixtureRouter.patch("/:id", ()=>{})

fixtureRouter.delete("/:id", ()=>{})

module.exports = fixtureRouter