import React from 'react';
import ExhibitDetail from './ExhibitDetail';
import ExhibitionList from './ExhibitionList';
import About from './About';


const Home = () => {
    return(
        <div className="container">
            <div className="row mt-3 mb-3">
                <About />
            </div>
            <hr/>
            <div className="row mt-3 mb-5">
                <ExhibitionList />
                <ExhibitDetail />
            </div>
        </div>
    )
}

export default Home;