import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import {Alert, Typography} from "@mui/material";
import NoAccess from "./NoAccess";
import PageWrapper from "./components/PageWrapper";

const Orders = ({ flags }) => {
    console.log('flags.orderAccess', flags.orderAccess)
    return (flags.orderAccess ?
            <PageWrapper title={"Manage Orders"}>
                <img src="/orders.png" alt="orders" width={'100%'}/>
            </PageWrapper> :
            <NoAccess requiredTier={"Business or Premium Tier"}></NoAccess>
            // <Alert severity="warning"> This feature is only available for Business and Premium members...</Alert>
    )

}

export default withLDConsumer()(Orders);