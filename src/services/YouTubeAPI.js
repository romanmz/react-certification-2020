// Settings
import apiKey from '../secret/youtube.api';

const baseUrl = new URL('https://www.googleapis.com/youtube/v3/');

// Mock Data
const useMockData = process.env.NODE_ENV === 'development';
export const mockSearchResults = [
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

// API URLs
function getSearchUrl() {
  const url = new URL('search', baseUrl);
  url.searchParams.set('key', apiKey);
  url.searchParams.set('part', 'snippet');
  url.searchParams.set('type', 'video');
  return url;
}
function getVideosUrl() {
  const url = new URL('videos', baseUrl);
  url.searchParams.set('key', apiKey);
  url.searchParams.set('part', 'snippet,contentDetails,statistics');
  return url;
}

// Fetch data
async function fetchData(url) {
  const rawData = await fetch(url);
  const data = await rawData.json();
  if (data.error) {
    throw Error(data.error.message);
  }
  return data;
}
async function fetchSearchResults(url) {
  if (useMockData) {
    return mockSearchResults;
  }
  const data = await fetchData(url);
  return data.items.map((item) => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
    };
  });
}
async function fetchVideo(url) {
  if (useMockData) {
    return mockSearchResults[0];
  }
  const data = await fetchData(url);
  const item = data.items[0];
  return {
    id: item.id,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.high.url,
  };
}

// Public functions
export async function getSearchResults(keyword) {
  const url = getSearchUrl();
  url.searchParams.set('q', keyword);
  return fetchSearchResults(url);
}
export async function getRelatedVideos(videoId) {
  const url = getSearchUrl();
  url.searchParams.set('relatedToVideoId', videoId);
  return fetchSearchResults(url);
}
export async function getVideo(videoId) {
  const url = getVideosUrl();
  url.searchParams.set('id', videoId);
  return fetchVideo(url);
}
export default {
  getSearchResults,
  getRelatedVideos,
  getVideo,
};
