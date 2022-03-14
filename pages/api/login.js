import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';

import { validateLoginInput } from '../../util/validators';

function generateToken(user, expiresIn) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    'test server for copier app',
    { expiresIn }
  );
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    if (req && req.body) {
      const { email, password } = req.body;

      if (email && password) {
        const { errors, valid } = validateLoginInput(email, password);
        if (!valid) {
          return res.status(422).json(errors);
        }

        try {
          if (email === 'raul@gmail.com') {
            if (password === '123456') {
              const id = uuid();
              const token = generateToken({ id, email }, '7d');

              return res.status(200).json({
                id,
                token,
              });
            } else {
              return res.status(422).json({ password: 'Incorrect password' });
            }
          } else {
            return res.status(422).json({ email: 'Incorrect email' });
          }
        } catch (err) {
          return res.status(500).json({ error: 'Internal server error' });
        }
      } else {
        return res.status(422).json({ error: 'Invalid data' });
      }
    } else {
      return res.status(400).json({ error: 'Invalid data' });
    }
  } else {
    return res.status(400).json({ error: 'Invalid method' });
  }
}
