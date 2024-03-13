import './style.css'
export default function ImgComponente({ src, width, quantidade  }) {
    const img = []
    for (let i = 0; i < quantidade; i++) {
        img.push(<img src={src} width={width} alt="" />)
    }
    return (
        <div className="body-image-projeto">
            {img}
        </div>
    );
    
}