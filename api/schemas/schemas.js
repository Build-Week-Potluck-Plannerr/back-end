const yup = require('yup');

const userSchema = yup.object({
  username: yup.string()
      .min(5, 'username: no less than 5 characters')
      .max(20, 'username: do not exceed 20 characters')
      .required('username is required'),
  name: yup.string(),
  role: yup.string()
      .default('guest'),
  password: yup.string()
      .min(6, 'password: more than 4 characters required')
      .max(20, 'password: no more than 20 characters please')
      .required('password is required'),
});

module.exports = {
  userSchema,
};
