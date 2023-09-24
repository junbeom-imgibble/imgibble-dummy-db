import express from "express"
import cors from "cors"
import {drafts, publish} from "./db/postings.js"
import {pageSettings, settings} from "./db/settings.js"
import {JsonDB, Config} from "node-json-db"

var db = new JsonDB(new Config("myDatabase", true, false, "/"))


const app = express()

app.use(cors({origin: true, credentials: true}))
app.use(express.json())

app.all("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    next()
})

app.use(express.static("public"))

app.listen(3001, (req, res) => {
    console.log("http://localhost:3001")
})

app.get("/drafts", (req, res) => {
    res.json(drafts)
})

app.get("/publish", (req, res) => {
    res.json(publish)
})

app.get("/settings", (req, res) => {
    res.json(pageSettings)
})
app.post("/settings", (req, res) => {
    const newSettings = req.body
    Object.entries(newSettings).map(([key, value]) => pageSettings[key] = value)
    res.json(pageSettings)
})

app.get("/design", (req, res) => [
    res.json(settings)
])

app.post("/design", (req, res) => {
    const newDesign = req.body
    Object.entries(newDesign).map(([key, value]) => settings[key] = value)
    res.json(settings)
})
// app.post("/active", (req, res) => {
//     const active = req.body.active
//     settings.active = active
//     res.json(pageSettings)
// })
//
// app.post("/tag", (req, res) => {
//     const tag = req.body.tag
//     res.json(pageSettings)
// })


app.post("/publish", (req, res) => {    
    const id = req.body.id
    const selectedStory = drafts.find(story => story.id === id)
    const index = drafts.indexOf(selectedStory)
    drafts.splice(index, 1)
    if(selectedStory?.id !== undefined) publish.push(selectedStory)
    res.json(publish)
})

app.put("/reset", (req, res) => {
    for(let story of publish) {
        drafts.push(story)
    }
    publish.splice(0, publish.length)
    res.json(drafts)
})

