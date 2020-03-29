import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
      responsive
    />
  ));

  return (
    <Grid container spacing={10} className="pa3 dib-m mr2" style={{ marginRight: "10px" }} >
      {listOfVideos}
    </Grid>
  );
}
