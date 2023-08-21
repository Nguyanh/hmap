import ocf from '../ocf-hosted-penguin-dark.png';

function Copyright() {
    return (
        <footer className = 'bg-light position-absolute bottom-0 w-100 p-3'>
            <p> <img src={ocf} className="image-thumbnail pe-5" alt=''/> © 2023 Health and Medical Apprenticeship Program. All Rights Reserved.</p>
            <p>We are a student group acting independently of the University of California. We take full responsibility for our organization and this web site.</p>
            <p>Built with love and React with </p>
        </footer>

    );
};

export default Copyright;