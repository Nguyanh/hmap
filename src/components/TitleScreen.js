function TitleScreen(props) {
    const { img, title, subtitle } = props;

    return (
        <div style={{paddingTop: 0, paddingBottom:10, backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
            <p style={{fontSize: 100, textAlign: "center"}} class="text-white">{title}</p>
            <p style={{fontSize: 40, textAlign: "center"}} class="text-white">{subtitle}</p>
        </div>
    );
};

export default TitleScreen;