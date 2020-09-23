import React from 'react';

import {useParams} from 'react-router-dom';
import PlaceList from '../components/PlaceList';
const UserPlaces =(props)=>{

    const PLACES= [
        {
            id: 'p1',
            title: 'gddd',
            description:"ntg",
            imageUrl:'/images/0.jpg',
            address: '25555',
            location:{
                lat:58,
                lng:-73
            },

            creator:'u1'
        },
        {
            id: 'p2',
            title: 'gddd',
            description:"ntg",
            imageUrl:'/images/1.jpg',
            address: '25555',
            location:{
                lat:58,
                lng:-73
            },

            creator:'u2'
        }
    ] ;
    const userId=useParams().userId;
      const loadedPlaces = PLACES.filter(place => place.creator===userId);
   return(
      
       <PlaceList items={loadedPlaces}/>

   );

   
}
export default  UserPlaces ;