import React, { useState } from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Item from "@mui/material/ListItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
function Footer() {
  return (
    <div className="Box">
      <Grid xs={12} lg={3}>
        <Grid spacing={0} className="container">
          <Grid item xs={12} lg={3} color="#fff" className="GridContainer">
            <InputLabel id="label" className="label">
              Age
            </InputLabel>
            <Item>
              <Select labelId="label" id="select" value="20">
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
              </Select>
            </Item>
          </Grid>
          <Grid item xs={12} lg={3} className="GridContainer">
            <InputLabel id="label">Age</InputLabel>
            <Item>
              <Select labelId="label" id="select" value="20">
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
              </Select>
            </Item>
          </Grid>
          <Grid item xs={12} lg={3} className="GridContainer">
            <InputLabel id="label">Age</InputLabel>
            <Item>
              <Select labelId="label" id="select" value="20">
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
              </Select>
            </Item>
          </Grid>
          <Grid item xs={12} lg={3} className="GridContainer">
            <InputLabel id="label">Age</InputLabel>
            <Item>
              <Select labelId="label" id="select" value="20">
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
              </Select>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
