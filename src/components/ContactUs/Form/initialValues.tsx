export enum InitialKey {
  FULL_NAME = 'fullName',
  EMAIL = 'email',
  MESSAGE = 'message',
}

const initialValues: Record<InitialKey, string> = {
  fullName: '',
  email: '',
  message: '',
};

export default initialValues;
