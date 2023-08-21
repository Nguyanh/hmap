function SectionGray(props) {
    const { header, content } = props;

    return (
        <div className="bg-light text-dark">
            <p color="#1F339A">{header}</p>
            <div>{content}</div>
        </div>
    );
};

export default SectionGray;