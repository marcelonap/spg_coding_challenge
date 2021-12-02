/*DISCLAIMER -------------------------------
As antonio said i am a student still, i had 0 react experience when i received the email but i set out to learn as much as i could and
tried to get as far as i could with the time i had in my hands. i was able to dedicate around 15hrs to this as my week was very busy but 
I hope that I was still able to show that i can learn and adapt. with more time in my hands i could surely implement this but the clock is running out and
i will have to be stuck at work for the rest of the night, which was the case a lot lately. I know the code is missing some parts but I implemented the api 
and got most of the logic implemented. I ran into a lot of troubles with the d3 functions i had been trying to use it as they had been deprecated and contained some errors
that wasted a large chunk of my time, but now i know what path i would take and how to work with something like this.  
*/
import React, {Component} from 'react';
import './App.css';
import Menu from './Menu';
import Filter from './Filter.js';


/*In this App component we render our Menu component and pass in the functions defined to catch the data,
then render our Filter component passing the constraint parameters as props.
It has a couple bugs as when it retrieves the month it always retrieves 2 characthers but our filter needs 
months with one character to omit the 0's in front which makes it not work for now with months smaller than 10 and it also limits the year and month separately.Both
can be easily fixed with a little more time more time
*/
class App extends Component{
    constructor(){
      super();
      this.state ={
       utilType: 'gas',
       startDate: '2016-10-01',
       endDate: '2021-12-31'
      }
    }

    onTypeSelect = (event) =>{
      this.setState({utilType: event.target.value});
      //console.log(event.target.name);
      console.log(this.state.utilType);
    }
     onStartSelect = (event) =>{
      this.setState({startDate: event.target.value});
    }
     onEndSelect = (event) =>{
      this.setState({endDate: event.target.value});
    }

   render(){
     console.log((this.state.startDate).substring(0,4));
     console.log((this.state.startDate).substring(5,7));
      return(
      <div className="App">
        
        <Menu fieldSelect={this.onTypeSelect} startSelect={this.onStartSelect} endSelect={this.onEndSelect} />

        <Filter type={this.state.utilType} 
        startYear={(this.state.startDate).substring(0,4)} 
        endYear={(this.state.endDate).substring(0,4)} 
        startMonth={(this.state.startDate).substring(5,7)} 
        endMonth={(this.state.endDate).substring(5,7)}/>
        
      </div>
    );
  
    }
    
}

export default App;
