import React, { Component } from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons' 
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faDashboard, faHome, faLandmark } from '@fortawesome/free-solid-svg-icons'

export default class Aside extends Component {
  render() {
    return (
      <div className='aside'>
        <ListGroup className='list'>
          <h1 className='h1'>{this.props.title}</h1>
          
          <ListGroupItem className='ListGroupItem'>
            <FontAwesomeIcon icon={faHome} style={{marginRight:'10px'}}/>
            Home
          </ListGroupItem>
          
          <ListGroupItem className='ListGroupItem'>
            <FontAwesomeIcon icon={faLandmark} style={{marginRight:'10px'}}/>
            About
          </ListGroupItem>
          
          <ListGroupItem className='ListGroupItem'>
            <FontAwesomeIcon icon={faCalendar} style={{marginRight:'10px'}}/>
            Pages
          </ListGroupItem>
          
          <ListGroupItem className='ListGroupItem'>
            <FontAwesomeIcon icon={faTelegram} style={{marginRight:'10px'}}/>
            Portfolio
          </ListGroupItem>
          
          <ListGroupItem className='ListGroupItem'>
            <FontAwesomeIcon icon={faDashboard} style={{marginRight:'10px'}}/>
            FAQ
          </ListGroupItem>
          
          <ListGroupItem className='ListGroupItem'>
            <FontAwesomeIcon icon={faWhatsapp} style={{marginRight:'10px'}}/>
            Contact
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
