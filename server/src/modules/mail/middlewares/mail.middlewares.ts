const { celebrate, Segments, Joi } = require('celebrate');

const verifyEmailData = ()=>{
    return celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required()
        }
    })        
}

module.exports = { verifyEmailData }