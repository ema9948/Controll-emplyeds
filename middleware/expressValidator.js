import { validationResult, body } from "express-validator";

export const validationResultExpress = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
  }
  next();
};

export const validEmpleado = [
  body("nombre").trim().notEmpty().escape(),
  body("apellido", "Apellido :error").trim().notEmpty().escape(),
  body("dni").trim().notEmpty().isNumeric().escape(),
  validationResultExpress,
];

export const validEstado = [
  body("dni").trim().isNumeric().notEmpty().escape(),
  validationResultExpress,
];
