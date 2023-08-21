import Card from 'react-bootstrap/Card';

function Program(props) {
    const { icon, name, description } = props;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={icon}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
    </Card>
    );
};

export default Program;