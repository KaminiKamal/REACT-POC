import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';
import '../css/style.css';
import '../css/materialize.min.css';


class FilterPage extends Component
{
  constructor(props)
  {
   super(props);
   this.state=
   {
	 isChecked: true
   }
  }

  toggleChange(){console.log("inside checkbox");
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }

  
  render()
  {
  	return(
	  <div>
	  	<div className="row" style={{marginTop:"10px", boxShadow: "5px 5px 2px #ebebe0", padding:"10px"}}>
	  		<div className="col s11">
	  			<span>Custom Diaries</span>
	  		</div>
	  		
	  			<input type="checkbox" checked={this.state.isChecked} 
          		 />
	  	   <label></label>	
	  		
	  	</div>
	  	<div className="row">
	  	<div className="input-field col s12">
	  	    <select multiple>
	  	      <option value="" disabled>Please select classNamees</option>
	  	      <option value="1">Option 1</option>
	  	      <option value="2">Option 2</option>
	  	      <option value="3">Option 3</option>
	  	    </select>
	  	    <label>className</label>
	  	  </div>
	  	  <div className="input-field col s12">
	  	      <select multiple>
	  	        <option value="" disabled>Please select sections</option>
	  	        <option value="1">Option 1</option>
	  	        <option value="2">Option 2</option>
	  	        <option value="3">Option 3</option>
	  	      </select>
	  	      <label>Section</label>
	  	    </div>
	  	    <div className="input-field col s12">
	  	        <select multiple>
	  	          <option value="" disabled>Please select subjects</option>
	  	          <option value="1">Option 1</option>
	  	          <option value="2">Option 2</option>
	  	          <option value="3">Option 3</option>
	  	        </select>
	  	        <label>Subject</label>
	  	    </div>
	  	    <Link to={'/homepage'} >Sign Up Instead</Link>
	  	</div>
	  </div>

)
}
}




export default FilterPage;
