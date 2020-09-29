import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import  CarouselComp from './component/carousel';
import  ImageList from './component/imageList';
import { Container, Row, Col } from 'reactstrap';


const App = (props) => {

	const intialSlideitems = [
	  {
	    src: 'images/1.jpg',
	  },
	  {
		src: 'images/2.jpg',    
	  },
	  {
		src: 'images/3.jpg',    
	  },
	  {
		src: 'images/4.jpg',    
	  },
	  {
		src: 'images/5.jpg',    
	  }
	];

	const intialImageItems = [
      {
        src: 'images/1.jpg',
      },
      {
        src: 'images/2.jpg',    
      },
      {
        src: 'images/3.jpg',    
      },
      {
        src: 'images/4.jpg',    
      },
      {
        src: 'images/5.jpg',    
      },
      {
        src: 'images/6.jpg',
      },
      {
        src: 'images/7.jpg',    
      },
      {
        src: 'images/8.jpg',    
      },
      {
        src: 'images/9.jpg',    
      },
      {
        src: 'images/10.jpg',    
      }
    ];

    const [slideItems, setSlideItems] = useState(intialSlideitems); 
    const [imageItems, setImageItems] = useState(intialImageItems); 

	  const onDragStart = (ev, index) => {
        ev.dataTransfer.setData("index", index);
    }

    const onDragOver = (ev) => {
        ev.preventDefault();
    }

    const onDrop = (ev, data) => {
       let index = ev.dataTransfer.getData("index");
       if(data == "image"){
          if(slideItems.length > 1){
            setImageItems([...imageItems,{src:slideItems[index]}])
            const selectedArray = [...slideItems]
            selectedArray.splice(index, 1);
            setSlideItems(selectedArray);
          }
       }else{
          if(imageItems.length > 1){
            setSlideItems([...slideItems,{src:imageItems[index]}])
            const selectedArray = [...imageItems]
            selectedArray.splice(index, 1);
            setImageItems(selectedArray);
          }
       }
       
    }
  
  return (
  	<Container>
  		<Row>
  			<Col sm="4">
  				<ImageList data={{
					imageItems,
					onDragStart,
					onDragOver,
					onDrop
				}} />
  			</Col>
  			<Col sm="8">
  				<div className="mt-5">
  					<CarouselComp slidedata={{
  						onDragStart,
  						onDragOver,
  						onDrop,
  						items:slideItems
  					}} />
  				</div>
  			</Col>
  		</Row>
  	</Container>
    
  );
}

export default App;

