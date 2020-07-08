import React, { Component } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            data: [],
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8001/api/user-post/', {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`
            }
        }
        ).then(res=>res.json())
        .then(json=>{
            this.setState(
                {
                    data: json,
                }
            )
        })
    }

    render() {
        console.log(this.state.data)
        return (
            <Container>
                <Row>
                    <Button as={Link} to="/create-post" variant="primary">
                        Create a post
                    </Button>
                </Row>
                {
                    this.state.data.map((val, key)=>{
                        return (
                            <Container>
                                <Row>
                                    {val.title}
                                </Row>
                                <Row>
                                    {val.post}
                                </Row>
                            </Container>
                        )
                    })   
                }   
            </Container>
        )
    }
}

export default Posts
