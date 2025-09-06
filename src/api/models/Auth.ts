export type Auth = 'getMobileSession' | 'getSession' | 'getToken';

export type AuthMethods = `auth.${Auth}`;

export type AuthParams = {
  'auth.getMobileSession': 0;
  'auth.getSession': 0;
  'auth.getToken': 0;
};
