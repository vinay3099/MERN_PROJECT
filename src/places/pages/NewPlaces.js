import React from 'react';

import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/UIElements/Button'
import {useForm} from '../../shared/hooks/form-hook'
import './PlaceForm.css'


const NewPlaces = ()=>{
    
   
const [formState,inputHandler] =useForm(
    {
     title:{
         value:'',
         isValid:false
     },
     description:{
         value:'',
         isValid:false
     },
     address:{
        value:'',
        isValid:false
     }
    
 },false);
 

    const placeSubmitHandler=(event)=>{
       event.preventDefault();
       console.log(formState.inputs);
    }
  
    return(<form className="place-form"  onSubmit={placeSubmitHandler}>
       <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid Title" onInput={inputHandler}/>
       <Input id="description"element="textarea" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please enter a valid Text(at least 5 characters)"  onInput={inputHandler}/>
       <Input id="address"element="input" label="address" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid address"  onInput={inputHandler}/>
       <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
    );
};

export default NewPlaces;