import React from 'react';
import Benifits from './Benifits';
import Services from './Services';

import Slider from './Slider';

const Home = () => {
    return (
        <div>
                <Slider/>
                <Benifits/>
                <Services/>
                
        </div>
    );
};

export default Home;