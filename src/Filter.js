import React from 'react';

import axios from 'axios';
import Mychart from './Mychart'
/* this component uses props to fetch and filter the right cvs file using props from the parent component as parameters
for the filter and the axios request and renders the Mychart component while passing it the filtered file as a prop.
*/
class Filter extends React.Component{
  state = {
    file: []
   
  }

  componentDidMount(){
    axios.get(`http://127.0.0.1:3000/${this.props.type}-bill-data`, { params: {filter: { 
  "offset": 0,
  "limit": 1000,
  "skip": 0,
  "where": {
    "and": [
      {
        "year": {
          "gte":`${this.props.startYear}`
        }
      },
      {
        "year": {
          "lte":`${this.props.endYear}`
        }
      },
        {
        "month": {
          "gte": `${this.props.startMonth}`
        }
      },
      {
        "month": {
          "lte": `${this.props.endMonth}`
        }
      }
    ]
  } 
 
} }})

      .then(res => {
        const file = res.data;
        this.setState({ file });
      })
     console.log(this.state.file)
    }

  render(){
      console.log(this.state.file)
    return (
        <div>

            <Mychart input={this.state.file}/>
      </div>
    )
    }
}

export default Filter;