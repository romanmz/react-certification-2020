import { mockUsername, mockPassword } from '../secret/mock.login';

export const mockUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  favorites: [],
};

export default async function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === mockUsername && password === mockPassword) {
        return resolve(mockUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}
