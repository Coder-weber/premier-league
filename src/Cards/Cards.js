import React from 'react';
import { useHistory } from 'react-router';
import img1 from '../asserts/Leauge Logo/image 1.png';
import './card-style.css';
const Cards = (props) => {
 const lp=props.lp;
 console.log(lp);  
 
 
    return (
        <div className="card text-center shadow">
            {/* <div className="overflow">
                <img  src={img1} alt="" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text text-secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eligendi totam quaerat officia corrupti repudiandae ducimus sint quidem quibusdam cum! Perspiciatis quos repudiandae, incidunt consequatur ex distinctio aut aperiam quae. 
                    </p>
                    <a href="#" className="btn btn-outline-success">Explore<i class="fas fa-arrow-right"></i></a>
            </div> */}
        </div>
    );
};

export default Cards;


{/* <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
<Card.Title>Card Title</Card.Title>
<Card.Text>
Some quick example text to build on the card title and make up the bulk of
the card's content.
</Card.Text>
<Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card> */}