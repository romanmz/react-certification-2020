import { screen } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import VideoPage from '../pages/Video';
import { mockSearchResults } from '../services/YouTubeAPI';

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
      route: `/video/${mockSearchResults[0].id}`,
    });
    const article = screen.getByRole('article');
    expect(article).toBeTruthy();
  });
  it('renders an <h1> with the video title', () => {
    renderWithRouter(VideoPage, {
      path: '/video/:id',
      route: `/video/${mockSearchResults[0].id}`,
    });
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeTruthy();
  });

  it('renders an <aside> container for the secondary info', () => {
    renderWithRouter(VideoPage, {
      path: '/video/:id',
      route: `/video/${mockSearchResults[0].id}`,
    });
    const aside = screen.getByRole('complementary');
    expect(aside).toBeTruthy();
  });
  it('renders an <h3> for related videos', () => {
    renderWithRouter(VideoPage, {
      path: '/video/:id',
      route: `/video/${mockSearchResults[0].id}`,
    });
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading.innerHTML).toBe('Related Videos');
  });
});
