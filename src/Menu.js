
import React from 'react';

/* This component takes care of rendering the forms seen on the web page and receiving onChange fucntions as props form the
parent component which are to fetch the selected information and pass it to the parent component's state so that it can 
be used to filter the data.
*/


const Menu = ({fieldSelect,startSelect,endSelect}) => {
    
    
      return(
            <div>
                <form>
                    <h1>Date Range</h1>
                    <label >From:</label>
                    <input type="date" id="start" name="start"
                        
                        min="2010-01-01" max="2022-01-01" onChange={startSelect}></input>

                    <label >To:</label>
                    <input type="date" id="end" name="end"
                        
                        min="2010-01-01" max="2022-01-01" onChange={endSelect}></input>
                </form>

                <form >
                <input onChange={fieldSelect} type="checkbox" id="Gas" name="Gas" value="Gas" defaultChecked></input>
                 <label > Gas</label><br></br>
                  <input  onChange={fieldSelect}  type="checkbox" id="Water" name="Water" value="Water"></input>
                    <label > Water</label><br></br>
                     <input onChange={fieldSelect}  type="checkbox" id="Electricity" name="Electricity" value="Electricity"></input>
                      <label > Electricity</label>
                        
                      </form>
            </div>
    );
 
    
}

export default Menu;
