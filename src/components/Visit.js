import React from 'react';
import Map from './Map';
import OperationsCard from './OperationsCard'


class Visit extends React.Component {

    render(){
        return(
          <div className="container-fluid mb-5 mt-4">
            <div className="row">
                <Map />
                <OperationsCard />
            </div>
          </div>
        )
    }

}

export default Visit;