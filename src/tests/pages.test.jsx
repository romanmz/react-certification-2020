import { screen } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import VideoPage from '../pages/Video';
import UserContext from '../state/UserContext';
import FavoritesPage from '../pages/Favorites';

// Mock data
const mockUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  favorites: [],
};
const mockResults = [
  {
    description:
      'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
    id: 'nmXMgqjQzls',
    thumbnail: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
    title: 'Video Tour | Welcome to Wizeline Guadalajara',
  },
  {
    description:
      'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
    id: 'HYyRZiwBWc8',
    thumbnail: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
    title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
  },
  {
    description:
      'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
    id: 'Po3VwR_NNGk',
    thumbnail: 'https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg',
    title: 'Wizeline hace sentir a empleados como en casa',
  },
  {
    description:
      'El plan de Wizeline, una empresa de inteligencia artificial, para ayudar a crecer la comunidad de ciencia de datos en CDMX y todo el país, a través de cursos ...',
    id: 'CHzlSGRvWPs',
    thumbnail: 'https://i.ytimg.com/vi/CHzlSGRvWPs/hqdefault.jpg',
    title: 'Wizeline',
  },
  {
    description:
      "Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando's passions ...",
    id: 'cjO2fJy8asM',
    thumbnail: 'https://i.ytimg.com/vi/cjO2fJy8asM/hqdefault.jpg',
    title: 'A Day in the Life of an Engineering Manager at Wizeline',
  },
];

// Tests
describe('<HomePage />', () => {
  it('renders a container <article>', () => {
    renderWithRouter(HomePage, {
      path: '/',
      route: '/',
    });
    const article = screen.getByRole('article');
    expect(article).toBeTruthy();
  });
  it('renders a container <heading>', () => {
    renderWithRouter(HomePage, {
      path: '/',
      route: '/',
    });
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeTruthy();
  });
});

describe('<LoginPage />', () => {
  it('renders a "username" <input>', () => {
    renderWithRouter(LoginPage, {
      path: '/login',
      route: '/login',
    });
    const usernameInput = screen.getByTestId('username-field');
    expect(usernameInput).toBeTruthy();
  });
  it('renders a "password" <input>', () => {
    renderWithRouter(LoginPage, {
      path: '/login',
      route: '/login',
    });
    const passwordInput = screen.getByTestId('password-field');
    expect(passwordInput).toBeTruthy();
  });
  it('renders a submit <button>', () => {
    renderWithRouter(LoginPage, {
      path: '/login',
      route: '/login',
    });
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeTruthy();
  });
});

describe('<VideoPage />', () => {
  it('renders an <article> container for the video details', () => {
    renderWithRouter(VideoPage, {
      path: '/video/:id',
      route: `/video/${mockResults[0].id}`,
    });
    const article = screen.getByRole('article');
    expect(article).toBeTruthy();
  });
  it('renders an <h1> with the video title', () => {
    renderWithRouter(VideoPage, {
      path: '/video/:id',
      route: `/video/${mockResults[0].id}`,
    });
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeTruthy();
  });

  it('renders an <aside> container for the secondary info', () => {
    renderWithRouter(VideoPage, {
      path: '/video/:id',
      route: `/video/${mockResults[0].id}`,
    });
    const aside = screen.getByRole('complementary');
    expect(aside).toBeTruthy();
  });
  it('renders an <h3> for related videos', () => {
    renderWithRouter(VideoPage, {
      path: '/video/:id',
      route: `/video/${mockResults[0].id}`,
    });
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading.innerHTML).toBe('Related Videos');
  });
});
