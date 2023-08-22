import Container from "react-bootstrap/Container";

function SectionGray(props) {
    const { header, content } = props;

    return (
        <div className="bg-light text-dark text-start py-4">
            <Container>
                <p className="fw-bold fs-4" style={{ color: '#1F339A' }}>{header}</p>
                <div>{content}</div>
            </Container>
        </div>
    );
};

export default SectionGray;