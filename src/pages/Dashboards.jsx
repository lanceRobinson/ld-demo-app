// Dashboards.js
import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import {Alert, Box} from "@mui/material";
import PageWrapper from "./components/PageWrapper";

const Dashboards = ({ flags }) => {
    console.log('flags.dashboardAccess', flags.dashboardAccess)
    return (flags.dashboardAccess ?

            <PageWrapper title={"Dashboard"}>
            <img src="/dashboards.png" alt="dashboards" width={'100%'}/>
        </PageWrapper>
        :
            <Alert severity="warning">This feature is only available for Premium members...</Alert>

    )
}

export default withLDConsumer()(Dashboards);