import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button } from 'react-bootstrap';
import './InnerBody.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare , faClock , faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons'; 

const styleForImage = {
    width : '200px' ,
    marginTop: '30px',
    borderRadius : '50%',
    border : '10px solid skyblue'
}
const styleForCard = {
    paddingTop: '30px' ,
    
}

const InnerBody = (props) => {
    return (
        <div className='courses'>
           <div className="crs-Card">
           <Card style={{ width: '100%' , backgroundColor: 'transparent' }}>
            <Card.Body style={styleForCard}>
            <div className="all-card-items">
            <div className="card-image">
                <Card.Img variant="top" src={props.crsName.img} style={styleForImage} />
            </div>
            <div className="card-texts">

            <h1 className='heading'><Card.Title>{props.crsName.crsName}</Card.Title></h1>
                <Card.Text>
            <p> <FontAwesomeIcon icon= { faChalkboardTeacher } /> Instucted by : {props.crsName.instructor}</p>
            <p> <FontAwesomeIcon icon= { faCheckSquare } /> Lecture quantity : {props.crsName.lecture}</p>
            <p> <FontAwesomeIcon icon= { faClock } /> Lecture Hour : {props.crsName.lectureTime}</p>
                </Card.Text>    
            </div>
            <div className="card-button">
                <p>{props.crsName.price} TK</p>
                <center><Button variant="primary" onClick={() => props.addToCart(props.crsName)}>Add to Your Cart</Button></center> 
            </div>    
            </div> 
            </Card.Body>
    </Card>
           </div>

            
            
        </div>
    );
};



{/* <h1>{props.crsName.crsName}</h1> */}
export default InnerBody;