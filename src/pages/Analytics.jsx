// Analytics.js
import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import {Alert} from "@mui/material";
import NoAccess from "./NoAccess";
import PageWrapper from "./components/PageWrapper";

const Analytics = ({ flags }) => {
    console.log('flags.analyticsAccess', flags.analyticsAccess)
    return (flags.analyticsAccess ?
        <PageWrapper title={"Analytics"}>

            <img src="/analytics.png" alt="Analytics" width={'100%'}/>
        </PageWrapper>
        :
        <NoAccess requiredTier={"Premium Tier"}></NoAccess>
            // <Alert severity="warning">This feature is only available for Premium members...</Alert>

    )
}

export default withLDConsumer()(Analytics);