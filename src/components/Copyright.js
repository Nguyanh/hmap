import Container from "react-bootstrap/Container";
import ocf from '../ocf-hosted-penguin-dark.svg';

function Copyright() {
    return (
        <footer className = 'bg-light position-absolute bottom-0 w-100 p-4'>
            <Container>
                <Container className="d-flex flex-row text-start">
                    <img src={ocf} className="image-thumbnail pe-3" alt=''/>
                    <p>We are a student group acting independently of the University of California. We take full responsibility for our organization and this website.</p>
                </Container>
                <p className="m-0">Built with love and React by Thu Nguye and Simon Hseih.</p>
                <p className="m-0">© 2023 Health and Medical Apprenticeship Program. All Rights Reserved.</p>
            </Container>
        </footer>

    );
};

export default Copyright;