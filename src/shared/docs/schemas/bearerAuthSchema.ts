export const bearerAuthSchema = {
  type: 'apiKey',
  in: 'header',
  name: 'Authorization',
  description:
    'Enter the token with the `Bearer: ` prefix, e.g. "Bearer abcde12345".'
};
