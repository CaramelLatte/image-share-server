import React, { useState} from 'react';
import { Container, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import ClamClub from '../clamclub_logo.png'




function imageCard() {
    return(
    <Card>
        <CardImg width="10%" src={ClamClub} />
    </Card>
    )
}
let images = []
for (let img = 0; img < 10; img++) {
    images.push(imageCard)
}

function Posts() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-2'>tag menu here</div>
                <div className='col'></div>
            </div>
        </div>
)
    
}
export default Posts;