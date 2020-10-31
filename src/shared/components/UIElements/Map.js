import React,{useRef, useEffect} from 'react';

import './Map.css';

const Map =(props)=>{
    const mapRef = useRef();

    const {center,zoom} = props;
      useEffect(()=>{
        const map = new window.SVGFEMorphologyElement.maps.Map(mapRef.current,{
            center:center,
            Zoom: zoom
         });
     
         new Window.google.maps.Marker({position:center,map:map});
      }, [center,zoom]);


    
 
return <div>className={`map ${props.className}`} style={props.style}</div>;
}

export default Map;