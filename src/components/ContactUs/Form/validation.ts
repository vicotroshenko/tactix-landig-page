import { object, string } from 'yup';

const validationSchema = object({
  full_name: string().trim().min(2).required(),
  email: string().trim().email().required(),
  message: string().trim().required(),
});

export default validationSchema;
