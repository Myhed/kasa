import React, {useState, useEffect} from 'react';
import './itemCaroussel.style.css'

export const ItemCaroussel = (props) => {
    const {path, isActive, direction, index} = props;
    let [nameClass, setNameClass] = useState('');
    let [state, setState] = useState(isActive);
    let [whichDirection, setWhichDirection] = useState(direction || false);

   const whichDirectionToMove = () => {
	if(state && whichDirection === "Next"){
	   setNameClass('picture transition-right')     
	}
    }

    useEffect(() => {
	if(direction === 'Next'){
	   if(state){
	     setNameClass('picture transition-left')
           }
	   if(isActive){
	     setNameClass('picture');
           }
	}
      
            setState(isActive);
      setWhichDirection(direction)
      //whichDirectionToMove() 
    },[isActive, direction])

    //console.log(`${index} is ${isActive}`)
  return (
	
             <div className={`wrapper-pcitures`}>
	      <img src={path} className='picture' />
	    </div>
  )
}
