const express = require('express')
const router = express.Router()
const slambookTemplateCopy = require('../models/SlambookModels')

router.post('/signup', (request, response) =>{

    const signedUpUser = new slambookTemplateCopy({
        q1:request.body.q1,
        q2:request.body.q2,
        q3:request.body.q3,
        q4:request.body.q4,
        q5:request.body.q5,
        q6:request.body.q6,
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router
