import React from 'react';
import { Card, Container, Row } from 'reactstrap'

const Posts = () => {
    // Replace with your actual image file names or URLs
    const imageFileNames = [
        'image1.png',
        'image2.png',
        'image3.png',
        'image1.png',
        'image2.png',
        'image3.png',
        'image1.png',
        'image2.png',
        'image3.png',
        'image1.png',
        'image2.png',
        'image3.png',
        'image1.png',
        'image2.png',
        'image3.png',
        'image1.png',
        'image2.png',
        'image3.png',        'image1.png',
        'image2.png',
        'image3.png',
        'image1.png',
        'image2.png',
        'image3.png',
        'image1.png',
        'image2.png',
        'image3.png',        'image1.png',
        'image2.png',
        'image3.png',
        'image1.png',
        'image2.png',
        'image3.png',
        'image1.png',
        'image2.png',
        'image3.png',
        // Add more image file names here
    ];

    return (

        <Container fluid className='main-view'>
            <aside className="tag-box col-2">
                Tag Element Here
                <br /><br /><br /><br /><br />
            </aside>
            <Row>
                <Row className="">

                    {imageFileNames.map((fileName, index) => (
                        <div className='col-xs-4 col-sm-4 col-md-3 col-xl-2 gallery-image-col'>
                            <img
                                key={index}
                                src={require(`../../server//images/${fileName}`)} // Assuming images are in the "images" folder
                                alt={`Thumbnail ${index + 1}`}
                                className="thumbnail gallery-image"
                            />
                        </div>
                    ))}
                </Row>
            </Row>
        </Container>
    );
};

export default Posts;