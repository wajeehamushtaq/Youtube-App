import React ,{ useState }from 'react';
// this is not default export as brackets show this
import {Grid} from '@material-ui/core';
import {SearchBar} from './component';
import {VideoDetails} from './component';
import youtube from './api/youtube';
import {VideoList} from './component';
import './component/Main.css';
import Youtubelogo from "./Youtubelogo.png";
import 'tachyons';


export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <img src={Youtubelogo} alt="website logo" width="300"/>
      {/* Grid is material ui component */}
    <Grid style={{ justifyContent: "center"  }} container spacing={20}>
      <Grid item xs={10}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            {/* input component*/}
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            {/* this component give details of playing video */}
            <VideoDetails video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <div className="pl5 dib-m mr2">
              {/* this component shows various related videolist */}
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </div>
  );

  // async function awaits fetch real data
  // this function get data
  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 8,    // fetch maximum results
        key: 'AIzaSyAFi7TyKlmGjt_8jGnj8emLid4ZqeyTUwY', // api key it is unique for every one
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}
