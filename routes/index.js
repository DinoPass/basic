const router = require('express').Router()
const path = require('path')
router.get('/', (req, res) => {
    const name = req.query.name
    // const html = `<div><p>Hello ${name}</p></div>`
    // res.send(html)
    //res.type('')
    res.sendFile(path.join(__dirname, '..', 'index.html'))
})
router.get('/json', (req, res) => {
    res.json({name: 'spike'})
})

module.exports = router
