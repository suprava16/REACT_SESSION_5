import React, { Component } from 'react'
import { Grid, Button,Box } from "@mui/material"
export default class Design extends Component {
  render() {
    return (
      <div>
        {/* <Button variant="outlined" size="small" color="secondary">UPLOAD</Button> */}
        {/* <Grid container justifyContent="space-between" style={{border:"3px solid red"}}>
          <Grid item lg={7} md={4} xs={12}  style={{border:"3px solid green"}}>
            GRID ONE
          </Grid>
          <Grid item lg={3} md={4} xs={12} style={{border:"3px solid yellow"}}>
            GRID TWO
          </Grid>
         
        </Grid> */}

        <Grid container >
        <Grid item xs={12} lg={8}>
        <Grid container>
          <Grid item xs={12} md={4} lg={3}>
            <Box boxShadow={3} border={4} color="red">
              To control space between children, use the spacing prop. The spacing value can be any positive number, including decimals and any string. The prop is converted into a CSS property using the theme.spacing() helper.
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Box boxShadow={3} border={4} color="red" >
              To control space between children, use the spacing prop. The spacing value can be any positive number, including decimals and any string. The prop is converted into a CSS property using the theme.spacing() helper.
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Box boxShadow={3} border={4} color="red" >
              To control space between children, use the spacing prop. The spacing value can be any positive number, including decimals and any string. The prop is converted into a CSS property using the theme.spacing() helper.
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Box boxShadow={3} border={4} color="red" >
              To control space between children, use the spacing prop. The spacing value can be any positive number, including decimals and any string. The prop is converted into a CSS property using the theme.spacing() helper.
            </Box>
          </Grid>
          </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
          <Grid container>
          <Grid item xs={12} md={4} lg={6}>
            <Box boxShadow={3} border={4} color="red">
              To control space between children, use the spacing prop. The spacing value can be any positive number, including decimals and any string. The prop is converted into a CSS property using the theme.spacing() helper.
            </Box>
          </Grid>
          </Grid>
          </Grid>
         
        </Grid>

      </div>
    )
  }
}
