function SectionWhite(props) {
    const { header, content } = props;

    return (
        <div className="bg-white text-dark text-start" >
            <p className="fw-bold fs-4" style={{ color: '#1F339A' }}>{header}</p>
            <div>{content}</div>
        </div>
    );
};

export default SectionWhite;