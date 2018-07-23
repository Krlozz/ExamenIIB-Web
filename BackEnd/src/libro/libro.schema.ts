import * as Joi from 'joi';

export const LIBRO_SCHEMA = Joi
    .object()
    .keys({
        id: Joi
            .number()
            .integer()
            .required(),
        icbn: Joi
            .number()
            .required()
            .integer(),
        nombre: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        numeroPaginas: Joi
            .number()
            .required()
            .integer(),
        edicion: Joi
            .number()
            .required()
            .integer(),
        fechaPublicacion: Joi
            .string()
            .required()
            .regex(/^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/),
        nombreEditorial: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z0-9]{3,30}$/)
            .min(3)
            .max(30),
        autorID: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z0-9]{3,30}$/)
            .min(1)
            .max(10),

    })
