import React from 'react';

import {useParams} from 'react-router-dom';
import PlaceList from '../components/PlaceList';
const UserPlaces =(props)=>{

    const PLACES= [
        {
            id: 'p1',
            title: 'Solang Valley ',
            description:" It is a side valley at the top of the Kullu Valley in Himachal Pradesh, India 14 km northwest of the resort town Manali on the way to Rohtang Pass",
            imageUrl:'/images/sh.jpg',
            address: ' Solang village, Manali, Kullu, Himachal Pradesh 175131, India.',
            location:{
                lat:58,
                lng:-73
            },

            creator:'u1'
        },
        {
            id: 'p2',
            title: 'Araku Valley',
            description:"Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. It's surrounded by the thick forests of the Eastern Ghats mountain range. ",
            imageUrl:'/images/AV.jpg',
            address: ' Araku - Visakhapatnam Rd, Araku, Visakhapatnam, Andhra Pradesh, 531149, India ',
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