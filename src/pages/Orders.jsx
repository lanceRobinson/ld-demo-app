import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import {Alert} from "@mui/material";

const Orders = ({ flags }) => {
    console.log('flags.orderAccess', flags.orderAccess)
    return (flags.orderAccess ?
            <div>
                <h1>Orders</h1>
                <img src="/orders.png" alt="orders" width={'100%'}/>
            </div> :
            <Alert severity="warning"> This feature is only available for Business and Premium members...</Alert>
    )

}

export default withLDConsumer()(Orders);