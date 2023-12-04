import express from 'express'
const Router = express.Router()
Router.get("/", (req, res) => res.send('hola'))
export default Router





//[booksRoutes].foreach(route => {
//    Router.use(route)
//})