const yup = require('yup');

const userSchemaRegister = yup.object({
  username: yup.string()
      .min(5, 'username: no less than 5 characters')
      .max(20, 'username: do not exceed 20 characters')
      .required('username is required'),
  name: yup.string()
      .max(25, 'please limit name field to 25 characters')
      .required('name: a name is required'),
  role: yup.string(),
  password: yup.string()
      .min(6, 'password: more than 4 characters required')
      .max(20, 'password: no more than 20 characters please')
      .required('password is required'),
});

const userSchemaLogin = yup.object({
  username: yup.string()
      .min(5, 'username: no less than 5 characters')
      .max(20, 'username: do not exceed 20 characters')
      .required('username is required'),
  password: yup.string()
      .min(6, 'password: more than 4 characters required')
      .max(20, 'password: no more than 20 characters please')
      .required('password is required'),
});
module.exports = {
  userSchemaRegister,
  userSchemaLogin,
};
