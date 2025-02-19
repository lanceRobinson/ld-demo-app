// Dashboards.js
import React from 'react';
import {withLDConsumer} from 'launchdarkly-react-client-sdk';
import {Alert, Box} from "@mui/material";
import PageWrapper from "./components/PageWrapper";

const Dashboards = ({flags}) => {
    console.log('flags.betaDashboard', flags.betaDashboard)
    return (

        <PageWrapper title={"Dashboard"}>
            {flags.betaDashboard ?
                <img src="/dashboard-beta.png" alt="beta-dashboards" width={'100%'}/> :
                <img src="/dashboards.png" alt="dashboards" width={'100%'}/>

            }
        </PageWrapper>

    )
}

export default withLDConsumer()(Dashboards);