import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: null
    };
  }

  componentDidMount(){
    // fetch('http://localhost:3001/api')
    //   .then(res=>res.json())
    //   .then(data=>this.setState({username: data.username}));
    axios.get('/api/next')
      .then((res)=>{
        this.setState({username: res.data.username});
      });
  }

  render(){
    const {username} = this.state;
    console.log(username);
    return(
      <div className="App">
        <h2 className="hello-data">
          {username?`Hello ${username}!`:'Hello World!'}
        </h2>
      </div>
    );
  }
}

export default App;
