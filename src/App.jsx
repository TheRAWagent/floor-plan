import React,{useState} from 'react';
import {Stage,Layer,Circle,Rect} from 'react-konva'
import './App.css';
import { MDBBtn } from 'mdb-react-ui-kit';

  
function App() {

  const [shapes,setShapes]=useState([])
  const createRectangle=()=>{
    const r={
      key:shapes.length,
      type:'rect',
      x:100,
      y:100,
      width:120,
      height:100,
      fill:'black' 
    }
    setShapes(shapes=>[...shapes,r])
  }
  const createCircle=()=>{
    const c={
      key:shapes.length,
      type:"circle",
      x:100,
      y:100,
      radius:100,
      fill:"red"
    }
    setShapes(shapes=>[...shapes,c])
  }
  return (
    <div className="app">
    <h1>Floor Plan</h1>
    <MDBBtn outline style={{marginRight:"20px"}} onClick={createRectangle}>Rectangle</MDBBtn>
    <MDBBtn outline onClick={createCircle}>Circle</MDBBtn>
    <div className='app__canvas'>

      <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {shapes.map((shape,k)=>{
          if(shape.type==='circle')return (<Circle draggable x={shape.x} y={shape.y} radius={shape.radius} fill={shape.fill}/>)
          else if(shape.type==='rect') return (<Rect draggable x={shape.x} y={shape.y} width={shape.width} height={shape.height} fill={shape.fill}/>)
          return (<></>)
        })}
      </Layer>
    </Stage>
    </div>
    </div>
  );
}

export default App;
