import React from 'react';

import PlaceItem from './PlaceItem' ;
import Card from '../../shared/components/UIElements/Card';
import './PlaceList.css';
const PlaceList =(props)=>{


    if(props.items.length ===0){
        return(

            <div className="place-list center">
                <Card>
                <h2>No Places Found</h2>
                <button>Share Place</button>
                </Card>
                
            </div>
        );
    }
    else{
        return <ul className="place-list">
             {props.items.map(place =>
              <PlaceItem key={place.id} id={place.id} image={place.imageUrl} title={place.title} description={place.description} address ={place.address} creatorId ={place.creatorId} coordinates ={place.location}/>
              )}
            </ul>;

    }
    
}
export default  PlaceList;