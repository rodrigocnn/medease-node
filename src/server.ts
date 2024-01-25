import express from "express"

const app = express()

app.get("/", (req, resp) => {
  return resp.json({ message: "Hello Word" })
})

app.listen(3333, () => {
  console.log("Server is running on port 3333")
})
