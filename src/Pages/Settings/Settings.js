import "./Settings.scss"
import Sidebar from "../../components/Sidebar/Sidebar"

const Settings = () => {
    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="settings-title">
                    <span className="settings-update-title">Cập Nhật Tài Khoản Của Bạn</span>
                    <span className="settings-delete-title">Xóa Tài Khoản</span>
                </div>
                <form className="settings-form">
                    <div className="settings-pp">
                        <img
                            src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.6435-9/89964928_2631495296976132_2678584065279393792_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=sSxxz4w2zukAX95VnW0&_nc_ht=scontent.fdad1-3.fna&oh=00_AT-F57jOSDriyBeQOF0G_K0yxrCuFgJ5zrtwGtidj87CGg&oe=6268A6A8"
                            alt="Ảnh Đại Diện"
                            className="pp-img"
                        />
                        <label htmlFor="file-input"className="settings-pp-label">
                            <i className="settings-pp-icon fa-solid fa-user-pen"></i>
                        </label>
                        <input type="file" id="file-input" />
                    </div>
                    <label>Tên Tài Khoản</label>
                    <input type="text" placeholder="chiminhtathoj" />
                    <label>Email</label>
                    <input type="text" placeholder="chiminhtathoj2009@gmail.com" />
                    <label>Mật Khẩu</label>
                    <input type="password" />
                    <button className="settings-submit-button">Thay Đổi</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
export default Settings