import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from '../components/App';
import SearchForm from '../components/SearchForm';
import SiteHeader from '../components/SiteHeader';
import UserContext from '../state/UserContext';
import SiteNav from '../components/SiteNav';
import UserInfo from '../components/UserInfo';
import VideoCard from '../components/VideoCard';
import VideoGrid from '../components/VideoGrid';
import { mockSearchResults } from '../services/YouTubeAPI';
import { mockUser } from '../services/MockLogin';

// Mock data
const lightTheme = {
  color: {
    text: '#333',
    background: 'white',
  },
};

// Tests
describe('<App /> component', () => {
  it('renders a <main> content container', () => {
    render(<App />);
    const container = screen.getByRole('main');
    expect(container).toBeTruthy();
  });
});

describe('<SearchForm /> component', () => {
  it('renders a search <form>', () => {
    render(<SearchForm />);
    const searchForm = screen.getByRole('search');
    expect(searchForm).toBeTruthy();
  });
  it('renders a search <input>', () => {
    render(<SearchForm />);
    const searchBox = screen.getByRole('searchbox');
    expect(searchBox).toBeTruthy();
  });
  it('renders a submit <button>', () => {
    render(<SearchForm />);
    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeTruthy();
  });
});

describe('<SiteHeader /> component', () => {
  it('renders a <header> container', () => {
    render(
      <BrowserRouter>
        <SiteHeader />
      </BrowserRouter>
    );
    const siteHeader = screen.getByRole('banner');
    expect(siteHeader).toBeTruthy();
  });
});

describe('<SiteNav /> component', () => {
  it('renders a <nav> container', () => {
    render(
      <BrowserRouter>
        <SiteNav />
      </BrowserRouter>
    );
    const nav = screen.getByRole('navigation');
    expect(nav).toBeTruthy();
  });
  it('renders a <ul> list', () => {
    render(
      <BrowserRouter>
        <SiteNav />
      </BrowserRouter>
    );
    const list = screen.getByRole('list');
    expect(list).toBeTruthy();
  });
  it('renders 2 nav items for logged out users', () => {
    render(
      <BrowserRouter>
        <SiteNav />
      </BrowserRouter>
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });
  it('renders 3 nav items for logged out users', () => {
    render(
      <UserContext.Provider value={{ user: mockUser, setUser: () => {} }}>
        <BrowserRouter>
          <SiteNav />
        </BrowserRouter>
      </UserContext.Provider>
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });
});

describe('<UserInfo /> component', () => {
  it('renders an avatar <img>', () => {
    render(<UserInfo />);
    const avatarImage = screen.getByRole('img');
    expect(avatarImage).toBeTruthy();
  });
  it('renders an <h3> with the name of the user ("Guest" if logged out)', () => {
    render(<UserInfo />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading.innerHTML).toBe('Welcome Guest!');
  });
  it('renders an <h3> with the name of the user', () => {
    render(
      <UserContext.Provider value={{ user: mockUser, setUser: () => {} }}>
        <UserInfo />
      </UserContext.Provider>
    );
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading.innerHTML).toBe(`Welcome ${mockUser.name}!`);
  });
});

describe('<VideoCard /> component', () => {
  it('renders an <a> link to the video page', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <VideoCard {...mockSearchResults[0]} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const videoLink = screen.getByRole('link');
    expect(videoLink.href).toBeTruthy();
  });
  it('renders a thumbnail <img>', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <VideoCard {...mockSearchResults[0]} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const thumbImage = screen.getByRole('img');
    expect(thumbImage.src).toBeTruthy();
  });
  it('renders an <h3> with the video title', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <VideoCard {...mockSearchResults[0]} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading.innerHTML).toBe(mockSearchResults[0].title);
  });
  it('renders a <p> tag with the video description', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <VideoCard {...mockSearchResults[0]} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const p = screen.getByText(mockSearchResults[0].description);
    expect(p).toBeTruthy();
  });
});

describe('<VideoGrid /> component', () => {
  it('renders an <ul> list', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <VideoGrid videos={mockSearchResults} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const list = screen.getByRole('list');
    expect(list).toBeTruthy();
  });
  it('renders a <li> for each received video', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <VideoGrid videos={mockSearchResults} />
        </BrowserRouter>
      </ThemeProvider>
    );
    const listitems = screen.getAllByRole('listitem');
    expect(listitems.length).toBe(mockSearchResults.length);
  });
});
