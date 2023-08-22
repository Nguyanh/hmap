import { useState } from "react"; 
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';

import leftIcon from "../arrow-left-circle-fill.svg";
import rightIcon from "../arrow-right-circle-fill.svg";

// TEST
import pic from "../gradPic.png";
import hsiIcon from "../globe-americas.svg";
import Program from "../components/Program";

function CardCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Carousel card
    function card(name, position, description) {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <div className="d-flex justify-content-center">
                        <img 
                            src={pic}
                            alt=""
                            width="200px"
                            height="200px"
                            style={{ borderRadius: "50%"}}
                        />
                    </div>
                    <Card.Title className="text-center">{name} - {position}</Card.Title>
                    <Card.Text className="text-start">{description}</Card.Text>
                </Card.Body>
            </Card>
        );
    };

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            slide={false}
            controls={true}
            prevIcon={<ul>leftIcon</ul>}
            nextIcon={rightIcon}
        >
            <Carousel.Item>
                {card("Thu", "Developer", "TEST")}
            </Carousel.Item>

            <Carousel.Item>
                <Program icon={hsiIcon} name="HSI" description="TEST2"/>
            </Carousel.Item>
            
            <Carousel.Item>
                <Program icon={hsiIcon} name="HSI" description="TEST3"/>
            </Carousel.Item>
        </Carousel>
    );
};

export default CardCarousel;