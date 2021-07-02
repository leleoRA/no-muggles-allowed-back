import joi from 'joi'

const insertCartSchema = joi.object({
    sku: joi.number().min(1).required(),
    quantity: joi.number().min(1).required(),
    token: joi.string().min(3).required()
})

export default insertCartSchema;