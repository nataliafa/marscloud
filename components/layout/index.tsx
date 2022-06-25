import React, { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Grid h="100vh" templateRows="70px 1fr" templateColumns="200px 1fr">
      <GridItem colSpan={1} rowSpan={2} bg="tomato">
        <Sidebar />
      </GridItem>
      <GridItem colSpan={1} bg="papayawhip" />
      <GridItem colSpan={1} bg="yellow">
        {children}
      </GridItem>
    </Grid>
  </>
);

export default Layout;
