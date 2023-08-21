import Container from "react-bootstrap/Container";

function SectionWhite(props) {
    const { header, content } = props;

    return (
        <div className="bg-white text-dark text-start mx-5">
            <Container>
                <p className="fw-bold fs-4" style={{ color: '#1F339A' }}>{header}</p>
                <div>{content}</div>
            </Container>
        </div>
    );
};

export default SectionWhite;