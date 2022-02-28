import React, { Component } from 'react'
// import ChildComponent from './ChildComponent';

 class LifeCycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Toto',
             step : 1
        }
        console.log(`Etape : ${this.state.step} dans la methode constructor()`);
    }

    componentDidMount() {
        console.log(`Etape : ${this.state.step} dans la methode componentDidMount()`);

        this.setState({
            name : this.props.name,
            step : this.state.step + 1
        })
        console.log(`Etape : ${this.state.step} setState() dans la methode componentDidMount()`);
    }
    
    componentDidUpdate(prevProps, prevState) {

        console.log(`Etape : ${this.state.step} dans la methode componentDidUpdate()`);
        console.log(prevState);
        console.log(this.state);

    }

    componentWillUnmount() {
        console.log('Je suis dans componentWillUnmount() ');
    }

    
    render() {

        console.log(`Etape : ${this.state.step} je suis dans la methode render()`);

        return (
            <div className='borderBox'>
                {console.log(`Etape : ${this.state.step} Mise a jour du DOM`)}
                <p>Chargement : {this.state.step}</p>
                <p>Nom : {this.state.name}</p>
                {/* <ChildComponent /> */}
            </div>
        )
    }
}

export default LifeCycle
