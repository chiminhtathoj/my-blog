import "./Register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="register-wrapper">

                <form className="register-form">
                    <span className="register-title">Đăng Ký</span>
                    <label>Tên tài khoản</label>
                    <input type="text" className="register-input register-email" placeholder="Nhập tên tài khoản của bạn " />
                    <label>Email</label>
                    <input type="text" className="register-input register-email" placeholder="Nhập email của bạn " />
                    <label>Mật khẩu</label>
                    <input type="password" className="register-input register-password" placeholder="Nhập mật khẩu của bạn" />
                    <label>Nhập lại mật khẩu</label>
                    <input type="password" className="register-input register-repassword" placeholder="Nhập lại mật khẩu của bạn" />
                    <button className="register-button">Đăng Ký</button>
                    <div className="register-login">
                        <label className="label-register">Đã có tài khoản ?</label>
                        <a href="" className="register-register-link">Đăng Nhập</a>
                    </div>

                </form>

            </div>

        </div>
    )
}
export default Register