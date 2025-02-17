// Analytics.js
import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import {Alert} from "@mui/material";

const Dashboards = ({ flags }) => {
    console.log('flags.analyticsAccess', flags.analyticsAccess)
    return (flags.analyticsAccess ?
        <div>
            <h1>Standard Dashboard</h1>
            <img src="/analytics.png" alt="Analytics" width={'100%'}/>
        </div>
        :
            <Alert severity="warning">This feature is only available for Premium members...</Alert>

    )
}

export default withLDConsumer()(Dashboards);