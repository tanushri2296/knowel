import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ImageList = (props) => {

    const {imageItems,onDragOver,onDrop,onDragStart} = props.data;
  return (
    <div className="h-100">
        <ListGroup onDragOver={(e)=>onDragOver(e)} onDrop={(e)=>{onDrop(e, "image")}} style={{height: '90vh',overflowY: 'auto'}} >
            {imageItems && imageItems.map((v,i)=>{
              return(
                  <ListGroupItem key={i} className="mt-3 mb-2 py-2 border-0 text-center"   tag="button" action>
                      <img src={v.src} onDragStart = {(e) => onDragStart(e, i)}
                    draggable className="img-fluid" style={{height:'140px',objectFit: 'contain'}} alt="" />
                  </ListGroupItem>
              )
            })}
        </ListGroup>
    </div>
  );
}

export default ImageList;