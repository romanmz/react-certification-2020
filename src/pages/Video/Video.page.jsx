import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideo, getRelatedVideos } from '../../services/YouTubeAPI';
import VideoItem from '../../components/VideoItem';

const VideoPage = () => {
  const { id } = useParams();

  // Get current video, and list of related videos
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  useEffect(() => {
    getVideo(id).then(setVideo).catch(console.log);
    getRelatedVideos(id).then(setRelatedVideos).catch(console.log);
  }, [id]);

  // Main content
  const videoPlayer = video ? (
    <iframe
      width="480"
      height="270"
      src={`//www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={video.title}
    />
  ) : (
    'no content'
  );

  // Render
  return (
    <>
      <article>
        <div className="videoPlayer">{videoPlayer}</div>
        <h1>{video ? video.title : ''}</h1>
        <p>{video ? video.description : ''}</p>
      </article>
      <aside>
        <h3>Related Videos</h3>
        <ul>
          {relatedVideos.map((item) => (
            <li key={item.id}>
              <VideoItem {...item} />
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default VideoPage;
