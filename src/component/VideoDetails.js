import React from "react";
import 'tachyons';
import { Paper, Typography } from "@material-ui/core";

export default ({ video }) => {
  if (!video) return <div>Search you video in Search bar</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "60%"}}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <div>
      <Paper elevation={6} className="pa3 dib-m mr2">
        <Typography variant="h4" className="pa3 dib-m mr2">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1" className="pa3 dib-m mr2">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2" className="pa3 dib-m ">{video.snippet.description}</Typography>
      </Paper>
      </div>
    </React.Fragment>
  );
}
