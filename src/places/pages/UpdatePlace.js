import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/util/validators'
import  Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/UIElements/Button';
import {useForm} from '../../shared/hooks/form-hook'
import './PlaceForm.css'
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


const UpdatePlace =()=>{

 const[isLoading,setIsLoading]= useState(true);
   const placeId = useParams().placeId;
  
    const[formState,inputHandler,setFormData] =useForm({
      title:{
          value: '',
          isValid: false
      },
      description:{
          value:'',
          isValid:false
      }
    },false);
    const identifiedPlace = PLACES.find(p => p.id === placeId);
   useEffect(()=>{
    setFormData(
        { title:{
        value:  identifiedPlace.title,
        isValid: true
    },
    description:{
        value:identifiedPlace.description,
        isValid:true
    }
   
},true)
setIsLoading(false);
   },[setFormData,identifiedPlace]);
    const placeUpdateSubmitHandler=(event)=>{
       event.preventDefault();
        console.log(formState.inputs);
    }
    if(!identifiedPlace){
        return(<div className="center">
         <h2>Could not find place!</h2>
        </div>);
       
    }
    if(isLoading){
        return(<div className="center">
         <h2>Loading...</h2>
   </div>);

    }
    return( 
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
    <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid Title" initialValue={formState.inputs.title.value}  initialValid={formState.inputs.title.isValid} onInput={inputHandler}/>
  <Input id="description"element="textarea" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please enter a valid Text(at least 5 characters)"  initialValue={formState.inputs.description.value}  initialValid={formState.inputs.description.isValid} onInput={inputHandler} />
  <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
</form>);
    

}
export default UpdatePlace;