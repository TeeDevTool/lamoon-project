import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// theme color
import colors from "assets/scss/_themes-vars.module.scss";

import { LamoonApplicationBar, LamoonNavigation } from "./components";

const Layout = styled("div")({
  backgroundColor: colors.paper,
  height: "100%",
  paddingTop: 64,
});

export default function DefaultLayout(props) {
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <LamoonApplicationBar />
      <main>
        <Layout>
          <Outlet />
        </Layout>
      </main>
      <LamoonNavigation />
    </Box>
  );
}
