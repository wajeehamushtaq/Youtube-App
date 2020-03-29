import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import 'tachyons';

export default ({ video, onVideoSelect }) => {
  return (
    <div className="pa3 mr2">
    <Grid item xs={10}>
      <Paper style={{  alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)}>
        <img style={{ marginRight: "10px", marginLeft:"5px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
        <Typography variant="subtitle1" className="pa3 dib-m mr2">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
    </div>
  );
}
