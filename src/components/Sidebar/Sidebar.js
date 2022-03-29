import "./Sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-item-title">
                    CÁ NHÂN
                </span>
                <img
                    className="sidebar-item-img"
                    src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.6435-9/89964928_2631495296976132_2678584065279393792_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=sSxxz4w2zukAX95VnW0&_nc_ht=scontent.fdad1-3.fna&oh=00_AT-F57jOSDriyBeQOF0G_K0yxrCuFgJ5zrtwGtidj87CGg&oe=6268A6A8"
                    alt="" />
                <p>
                    The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela
                </p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-item-title">
                    THỂ LOẠI
                </span>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">Cuộc Sống</li>
                    <li className="sidebar-list-item">Âm Nhạc</li>
                    <li className="sidebar-list-item">Thể Thao</li>
                    <li className="sidebar-list-item">Công nghệ</li>
                    <li className="sidebar-list-item">Phim Ảnh</li>
                    <li className="sidebar-list-item">Nghệ Thuật</li>
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-item-title">THEO DÕI</span>
                <div className="sidebar-social">
                    <i className="sidebar-social-icon fa-brands fa-facebook"></i>
                    <i className="sidebar-social-icon fa-brands fa-instagram"></i>
                    <i className="sidebar-social-icon fa-brands fa-twitter"></i>
                    <i className="sidebar-social-icon fa-brands fa-google"></i>
                </div>
            </div>
        </div>
    )
}
export default Sidebar