import React, {Component} from 'react';
import './App.css';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <div className={'deleteMe'}>
                    <Card>
                        <CardImg top width="100%"
                                 src="https://pps.whatsapp.net/v/t61.11540-24/42884484_2180557928853008_2145979825330847744_n.jpg?oe=5BD638AF&oh=a5df8903d93190997d5328fd72832ccf"
                                 alt="Card image cap"/>
                        <CardBody>
                            <CardTitle>Optimum</CardTitle>
                            <CardSubtitle>Team we need a new laptop</CardSubtitle>
                            <CardText>Inspirerende tekst</CardText>
                            <Button>activate triple boot</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}


