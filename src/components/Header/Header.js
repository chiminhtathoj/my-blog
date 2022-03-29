import "./Header.scss"
import imgheader from '../../assets/imgHeader.jpg';
const Header = () => {
    return (
        <div className="header">
            <div className="header-title">

                <span className="header-title-small">
                    Chiminhtathoj
                </span>
                <span className="header-title-large">
                    mô tả
                </span>

            </div>
            <img className="header-title-img" src={imgheader} alt="img header" />
        </div>
    )
}
export default Header