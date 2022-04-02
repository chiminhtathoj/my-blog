import { Link } from "react-router-dom"
import "./Login.scss"

const Login = () => {
    return (
        <div className="login">
            <div className="login-wrapper">

                <form className="login-form">
                    <span className="login-title">Đăng Nhập</span>
                    <label>Email</label>
                    <input type="text" className="login-input login-email" placeholder="Nhập email của bạn " />
                    <label>Mật khẩu</label>
                    <input type="password" className="login-input login-password" placeholder="Nhập mật khẩu của bạn" />
                    <button className="login-button">Đăng Nhập</button>
                    <div className="login-register">
                        <label className="label-login">Chưa có tài khoản ?</label>
                        <Link to="/register" className="login-register-link">Đăng Ký</Link>
                    </div>

                </form>

            </div>

        </div>
    )
}
export default Login