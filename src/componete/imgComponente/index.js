import './style.css'
export default function ImgComponente({ src, width, quantidade  }) {
    const img = []
    for (let i = 0; i < quantidade; i++) {
        img.push(<img src={src} width={width} alt="" />)
    }
    return (
        <div className="body-image-projeto">
            <a href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer' >
            {img}
            </a>
        </div>
    );
    
}