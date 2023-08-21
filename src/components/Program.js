import Card from 'react-bootstrap/Card';

function Program(props) {
    const { icon, name, description } = props;

    return (
        <Card style={{ width: '18rem' }} border="light" className="shadow-sm">
            <Card.Body>
                <div className="d-flex justify-content-center my-3">
                    <img 
                        src={icon}
                        alt=""
                        width="30"
                        height="30"
                        className=""
                    />
                </div>
                <Card.Title className="text-center">{name}</Card.Title>
                <Card.Text className="text-start">{description}</Card.Text>
            </Card.Body>
    </Card>
    );
};

export default Program;