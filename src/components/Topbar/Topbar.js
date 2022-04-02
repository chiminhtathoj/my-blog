import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.scss";

const Topbar = () => {
    const user = false;
    return (
        <div className="top">
            <div className="top-left">
                <i className="top-left-icon fa-brands fa-facebook"></i>
                <i className="top-left-icon fa-brands fa-instagram"></i>
                <i className="top-left-icon fa-brands fa-twitter"></i>
                <i className="top-left-icon fa-brands fa-google"></i>
            </div>
            <div className="top-center">
                
                <ul className="top-center-list">
                    <Link to="/" className="top-list-item">Trang chủ</Link>
                    <Link to="/settings" className="top-list-item">Cá nhân</Link>
                    <Link to="/write" className="top-list-item">Viết bài</Link>
                    <Link to="/contact" className="top-list-item">Liên hệ</Link>
                    {
                        user && <Link to="/logout" className="top-list-item">Đăng xuất</Link>
                    }

                </ul>

            </div>

            <div className="top-right">
                {
                    user ? (<img className="top-right-avatar" src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/165869891_1125869027887737_2609379682427357032_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3QgYXWdnd8wAX_0z3dA&_nc_ht=scontent.fdad1-2.fna&oh=00_AT-Yd75VlCQgYdEUA1a-BmRsZG09iACH30XmT-j076qJkQ&oe=62638158"
                        alt="Ảnh đại diện"
                    />) :
                        (
                            <ul className="top-right-list">
                                <>
                                    <Link to="/login" className="top-right-list-item">Đăng Nhập</Link>
                                    <Link to="/register" className="top-right-list-item">Đăng Ký</Link>
                                </>
                            </ul>
                        )
                }

                <i className="top-right-icon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Topbar