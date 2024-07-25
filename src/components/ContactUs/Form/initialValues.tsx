export enum InitialKey {
  FULL_NAME = 'full_name',
  EMAIL = 'email',
  MESSAGE = 'message',
}

const initialValues: Record<InitialKey, string> = {
  full_name: '',
  email: '',
  message: '',
};

export default initialValues;
