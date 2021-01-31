import brcypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: brcypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: brcypt.hashSync('123456', 10)
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: brcypt.hashSync('123456', 10)
  },
]

export default users;