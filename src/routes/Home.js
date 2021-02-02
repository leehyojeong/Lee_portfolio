import React from 'react';
import axios from 'axios';
import './Home.css';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            username: null,
            projects: []
        };
    }

    getProjects = async()=>{
        // this.setState({proejcts, isLoading: false});
    };

    componentDidMount(){
        axios.get('/api')
            .then((res)=>{
                this.setState({username: res.data.username});
            });
        // this.getProjects();
    }

    render(){
        const {isLoading, username, projects} = this.state;

        return(
            <section className="start">
                {isLoading? (
                    <div className="loader">
                        <span className="loader-text">Loading...</span>
                    </div>
                ) : (
                    <div className="App">
                        <h2 className="hello-data">
                            {username?`Hello ${username}!`:'Hello World!'}
                        </h2>
                    </div>
                )}
            </section>
        );
    }
}

export default Home;