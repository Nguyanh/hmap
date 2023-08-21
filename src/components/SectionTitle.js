function SectionTitle(props) {
    const { img, title } = props;

    return (
        <div style={{paddingTop: 100, paddingBottom:100, backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
            <p style={{fontSize: 100, position: "center"}} class="text-white">{title}</p>
        </div>
    );
};

export default SectionTitle;