import React, { Component } from 'react'
import { getApartments } from '../api/index'
import './PublicExample.css'

class PublicExample extends Component {
  constructor(props){
    super(props)
    this.state = {
        apartments: []
      }
    }

    componentWillMount() {
      getApartments()
      .then(APIapartments => {
        console.log("these are our apartments " + APIapartments)
        this.setState({
          apartments: APIapartments
        })
      })
    }


    render() {
      console.log(this.props)
      return(
                <div className="ApartmentList">
                  {this.state.apartments.map(el => {
                    return (
                      <div className="IndividualList">
                        <h3>
                        <img src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c02fb96f9cfc16d3649835b75d1b2033&auto=format&fit=crop&w=1350&q=80" style={{width:300}}/>
                        <a href={`/apartments/${el.id}`}>

                        <br/>

                        Address: <br/>
                        {el.street} { }
                        Unit: {el.unit} <br/>
                        {el.city} {el.state} {el.postalcode} {el.country}
                        </a>
                        </h3>

                      </div>
                    )
                  })}
                </div>
              )
    }
}

export default PublicExample
