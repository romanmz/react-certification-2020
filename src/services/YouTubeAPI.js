// Settings
import apiKey from '../secret/youtube.api';

const baseUrl = new URL('https://www.googleapis.com/youtube/v3/');

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
