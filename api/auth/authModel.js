

const validatePayload = (schema) => async (req, res, next) => {
  const body = req.body;

  try {
    await schema.validate(body, {abortEarly: false});
    next();
  } catch ( error) {
    next(error);
  }
};

module.exports = {
  validatePayload,
};
