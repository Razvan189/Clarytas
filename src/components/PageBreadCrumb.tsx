/*
 * Copyright (c) 2023.
 * File Name: BreadCrumb.tsx
 * Author: Coderthemes
 */

import { Box, Breadcrumbs, Typography } from "@mui/material";
import {Link } from "react-router-dom"
import PageMetaData from "./PageMetaData";
import { LuChevronLast, LuChevronLeft, LuChevronRight } from "react-icons/lu";

type BreadcrumbProps = {
  title: string;
  subName?: string;
};

const PageBreadcrumb = ({ title, subName }: BreadcrumbProps) => {
  const breadcrumbItems = [
      <Typography key="3" variant="body2">
          <h2>{title}</h2>
      </Typography>,
    <Link key="2" color="inherit" style={{color: "#50555c"}} >
        <Typography key="3" variant="body2">
            <h2>{subName}</h2>
        </Typography>
    </Link>

  ];

  return (
    <>

      <Box height={75} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Breadcrumbs
          separator={<LuChevronRight size={15} />}
          aria-label="breadcrumb"
          sx={{
            "& ol": {
              display: "flex",
              gap: 2
            },
          }}>
          {breadcrumbItems}
        </Breadcrumbs>
      </Box>
    </>
  );
};

export default PageBreadcrumb;
