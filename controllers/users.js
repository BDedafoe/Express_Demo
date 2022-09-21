const express = require('express')
const router = express.Router()

//static routes
router.get('/', (req, res) => {
    res.render('users')
})

router.get('/new', (req, res) => {
    res.render('new')
})

router.post('/', (req, res) => {
    // users.push({ firstName: req.body.firstName})
    // res.redirect(`/controllers/users/${users.length - 1}`)
    // console.log(req.body.firstName.lastName)
    res.send("hey hey")
})

// //dynamic parameter which changes the URL based on the parameters
router.get('/:id', (req, res) => {
    console.log(req.user)
    res.send(`Get With ID ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`User Get With ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete user With ID ${req.params.id}`)
})

const users = [{name: "purrps"}, {name: "smokey"}]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

//cleaned up version of the above code
// router
//     .route('/:id')
//     .get((req, res) => {
//         res.send(`Get With ID ${req.params.id}`)
//     })
//     .put((req, res) => {
//         res.send(` Update User With ID ${req.params.id}`)
//     })
//     .delete((req, res) => {
//         (`Delete user With ID ${req.params.id}`)
//     })

module.exports = router