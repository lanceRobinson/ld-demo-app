// Dashboards.js
import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import {Alert} from "@mui/material";

const Dashboards = ({ flags }) => {
    console.log('flags.dashboardAccess', flags.dashboardAccess)
    return (flags.dashboardAccess ?
        <div>
            <h1>Fancy Dashboards</h1>
            <img src="/dashboards.png" alt="dashboards" width={'100%'}/>
        </div>
        :
            <Alert severity="warning">This feature is only available for Premium members...</Alert>

    )
}

export default withLDConsumer()(Dashboards);