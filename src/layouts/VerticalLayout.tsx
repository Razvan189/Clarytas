/*
 * Copyright (c) 2023.
 * File Name: VerticalLayout.tsx
 * Author: Coderthemes
 */

import { LinearProgress, styled } from "@mui/material"
import { Suspense, lazy, type ReactNode } from "react"

const LeftSideBar = lazy(() => import("@src/layouts/LeftSideBar"))
const RightSideBar = lazy(() => import("@src/layouts/RightSideBar"))
const Topbar = lazy(() => import("@src/layouts/Topbar"))
const Footer = lazy(() => import("@src/layouts/Footer"))

const ContentWrapper = styled("div")(({ theme }) => {
    return {
        paddingBottom: 0,
        paddingTop: 0,
        height: "100%"
    }
})

const VerticalLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div style={{ display: "flex" }}>
            <div
                style={{
                    flexDirection: "column",
                    display: "flex",
                    width: "100%",
                    position: "absolute",
                    height: "100%",
                    overflowX: "hidden"
                }}>
                <Suspense fallback={<div />}>
                    <Topbar />
                </Suspense>

                <ContentWrapper>
                    <Suspense fallback={<div />}>
                        {children}
                    </Suspense>
                </ContentWrapper>

            </div>
        </div>
    )
}

export default VerticalLayout
