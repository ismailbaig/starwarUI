import React, {Component} from 'react';
import axios from 'axios';
import logo from '../logo.png';

export default class alltasks extends Component{

    constructor(props){
        super(props);
        this.state= {
            longestCrawlMovie: '', task1loadmsg: 'loding',
            personsMostMovies: '', task2loadmsg: 'loding',
            species: [], task3loadmsg: 'loding',
            toggleContentInfo: false,
            isValidUser: false,
            baseurl: 'http://localhost:4000'
        };

        this.getAllTasks= this.getAllTasks.bind(this);
    }

    getAllTasks(e) {

        const { task1loadmsg, task2loadmsg, task3loadmsg} = this.state;

        this.setState(
            {
                longestCrawlMovie: '', task1loadmsg: 'loading (longest crawl movie info) , please wait!!', 
                personsMostMovies: '', task2loadmsg: 'loading (person appeared most), please wait!!',
                species: [], task3loadmsg: 'loading (species appeared most), please wait!!',
                toggleContentInfo: !this.state.toggleContentInfo
            });

            if(!this.state.toggleContentInfo){
                axios.post(this.state.baseurl + '/login', {"userid": '11', "pwd":"11"}).then(res => {
                    this.setState({isValidUser: res.data});
                    if (this.state.isValidUser)  {
                        axios.get(this.state.baseurl + '/task1')
                        .then(res => {
                            this.setState({longestCrawlMovie : res.data, task1loadmsg: ''});
                        }).catch(err => {
                            this.setState({longestCrawlMovie : 'Error: Check Console OR Contact Admin', task1loadmsg: ''});
                            console.log('Error occured while loading Task1 api ', err);
                        })

                        axios.get(this.state.baseurl + '/task2')
                        .then(res => {
                            this.setState({personsMostMovies : res.data[0].name, task2loadmsg: ''});
                        }).catch(err => {
                            this.setState({personsMostMovies : 'Error: Check Console OR Contact Admin', task2loadmsg: ''});
                            console.log('Error occured while loading Task2 api ', err);
                        })

                        axios.get(this.state.baseurl + '/task3')
                        .then(res => {
                            this.setState({species : res.data, task3loadmsg: ''});
                        }).catch(err => {
                            this.setState({personsMostMovies : 'Error: Check Console OR Contact Admin', task3loadmsg: ''});
                            console.log('Error occured while loading Task3 api ', err);
                        })

                    } else {
                        alert('Invalid User')
                    }
                }).catch(err => {
                    console.log('Error occured while Loggin in : ', err);
                });
            }
    }

    render(){
        return(
        <div>
            <img src={logo} alt='' />
            <button  className="btn-yellow" onClick={this.getAllTasks}>Do. Or do not. There is no try</button>
            <div> {this.state.toggleContentInfo && 
                (<div>
                    <p className="text-white">
                        Longest Crawl Movie Title :<br></br> 
                        <div className="text"> {this.state.task1loadmsg}</div>
                        <span className="text">{this.state.longestCrawlMovie}</span>
                        </p> 

                        <p className="text-white"> What character (person) appeared in most of the Star Wars films?<br></br>
                            <div className="text"> {this.state.task2loadmsg}</div>
                            <span className="text">{this.state.personsMostMovies}</span>
                        </p>

                        <p className="text-white">What species appeared in the most number of Star Wars films?</p>
                            <div className="text"> {this.state.task3loadmsg}</div>
                            <ul>
                                <li>{this.state.species.map( (s) => {
                                    return <div className="text" key ={s.id}>{s.name} ({s.count})</div>
                                })}</li>
                            </ul>
                    
                </div>)}
            </div>
        </div>
        )
    }
}