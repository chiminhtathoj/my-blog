import React from "react";
import "./Topbar.scss";

const Topbar = () => {
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
                    <li className="top-list-item">Trang chủ</li>
                    <li className="top-list-item">Cá nhân</li>
                    <li className="top-list-item">Liên hệ</li>
                    <li className="top-list-item">Đăng xuất</li>
                </ul>
            </div>
            <div className="top-right">
                <img className="top-right-avatar" src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/165869891_1125869027887737_2609379682427357032_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3QgYXWdnd8wAX_0z3dA&_nc_ht=scontent.fdad1-2.fna&oh=00_AT-Yd75VlCQgYdEUA1a-BmRsZG09iACH30XmT-j076qJkQ&oe=62638158"
                    alt="Ảnh đại diện"
                />
                <i className="top-right-icon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

    )
}

export default Topbar