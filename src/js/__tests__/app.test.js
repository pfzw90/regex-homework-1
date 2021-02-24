import Validator from '../app';

test.each([
  ['vasya'],
  ['v098-_x'],
])(
  ('validateUsernameValid'),
  (username) => {
    const val = new Validator(username);
    expect(val.validateUsername()).toBe(username);
  },
);

test.each([
  ['', 'Username is too short'],
  ['fdf1234aasad', 'Username must not contain more than 3 digits in a row'],
  ['-abcDEF', 'Username must begin and end with letters and contain only letters, didgits or "_" and "-" signs'],
  ['dd%323adf', 'Username must begin and end with letters and contain only letters, didgits or "_" and "-" signs'],
  ['saf88_', 'Username must begin and end with letters and contain only letters, didgits or "_" and "-" signs'],
  ['-saf88A-', 'Username must begin and end with letters and contain only letters, didgits or "_" and "-" signs'],

])(
  ('validateUsernameNotValid'),
  (username, err) => {
    const val = new Validator(username);
    expect(() => val.validateUsername()).toThrowError(new Error(err));
  },
);
