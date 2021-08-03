import React, { Component } from 'react';
import {connect} from 'react-redux'
class Input extends Component {
 
  

  render() { 
    return ( 

      <div>
<h1>Task</h1>
<h5>to delet the task just click on it</h5>
        <input type="text" onChange={(e)=>{this.props.hundelChange(e.target)}}/>
        <button onClick={()=>{this.props.add(this.props.input)}}>Add Tasks</button>
      </div>
    );
  
  }
  }

const mapDispatchToProps=(dispatch)=>{
return {
  hundelChange:(target)=>{
    dispatch ({type:'SET_INPUT',value:target.value})
  },
  add:(input)=>{
    let obj={}
    let inputValue=input
    let id=Math.floor(Math.random()*1000)
    obj={inputValue,id}
    dispatch ({type:'ADD_INPUT',value:obj})
  }
}
}
const mapStateToProps=(state)=>{
  return{
    input:state.input
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (Input);