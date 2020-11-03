import React from 'react';

import TopContainer from './TopContainer/TopContainer';
import CallToActionContainer from './CallToAction/CallToActionContainer';
import ThirdContainer from './ThirdContainer/ThirdContainer';

const home = ()=>{
    return(
        <React.Fragment>
            
            <TopContainer />
            <CallToActionContainer />
            <ThirdContainer/>
            
        </React.Fragment>
    );
}
export default home;