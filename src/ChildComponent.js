import React, { Component } from 'react'

class ChildComponent extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = { 
        }
        console.log('Je suis dans la methode constructor() ENFANT');
    }

    componentDidMount() {
        console.log('Je suis dans la methode componentDidMount() ENFANT');
    }
    
    
    render() {

        console.log('Je suis dans la methode render() ENFANT');
        return (
            <div>
                { console.log('Mise a jour dans le composant ENFANT')}
                Hello world
            </div>
        )
    }
}

export default ChildComponent
