import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const img = {
    display: 'block',
    width: '40%',
    margin: 'auto'
}
const Ai = ({ flags }) => {
    console.log('flags.newAiFeature',flags.newAiFeature)
    return (flags.newAiFeature ?
            <div>
                <h1>Artificial Intelligence</h1>
                <img src="/ai.png" alt="ai" width={'100%'}/>
            </div> :
            <img src="/coming-soon.png" alt="ai" style={img}/>
    )
}

export default withLDConsumer()(Ai);