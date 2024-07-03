import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Footer from "../footer";
import Header from "../header";
import axios from "axios";
import consts from "../../const";
import DataView from "../DataGrid/DataView";
import WorldClock from "../WorldClock";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    
  return (
    <React.Fragment>
      <Header />
      <Box sx={{ flexGrow: 1, pt: 11, m: 1, mb: 5 }}>
        <Container
          maxWidth="fullWidth"
          sx={{
            border: "1px solid rgba(224, 224, 224, 1)",
            borderRadius: "0.5rem",
            p: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ width: "100%" }}>
              <Item sx={{ boxShadow: "none" }}>
                <WorldClock />
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </React.Fragment>
  );
}
