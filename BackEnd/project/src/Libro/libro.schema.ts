import * as Joi from 'joi';

export const LIBROS_SCHEMA = Joi
    .object()
    .keys({
        id: Joi
            .number()
            .integer()
            .required(),
        isbn: Joi
            .string()
            .required(),
        nombre: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,30}$/)
            .min(3)
            .max(30),
        numeroPaginas: Joi
            .number()
            .required(),
        edicion: Joi
            .number()
            .integer()
            .required(),
        fechaPublicacion: Joi
            .string()
            .required()
            .regex(/^[0-9]{6,8}$/)
            .min(6)
            .max(8),
        nombreEditorial: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,30}$/)
            .min(3)
            .max(30),
        autorId: Joi
            .number()
            .integer()
            .required(),
        }
    )