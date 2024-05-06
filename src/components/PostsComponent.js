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
        // Add more image file names here
    ];

    return (

        <Container fluid className=''>
            <aside className="tag-box col-2">
                Tag Element Here
                <br /><br /><br /><br /><br />
            </aside>
            <Row>
                <Row className="">

                    {imageFileNames.map((fileName, index) => (
                        <div className='col-1 gallery-image-col border border-black'>
                            <img
                                key={index}
                                src={require(`../../server//images/${fileName}`)} // Assuming images are in the "images" folder
                                alt={`Thumbnail ${index + 1}`}
                                className="thumbnail gallery-image"
                            />
                        </div>
                    ))}
                </Row>
                <Row className=''>

                    

                        {imageFileNames.map((fileName, index) => (
                            <div className='col-1 gallery-image-col border border-black'>
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