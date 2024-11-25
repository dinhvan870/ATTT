import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './styles.css';
import SignUp from './SignUp'; // Import màn hình Đăng ký
import Admin from './Admin';
import Customer from './Customer';
import Reception from './Reception';
import Manager from './Manager';
import Home from './Home';
import AccountSettings from './AccountSettings';


function App() {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <img 
                        src="https://cdn.logo.com/hotlink-ok/logo-social.png" 
                        alt="Logo" 
                        className="logo"
                    />
                    <h2>Chào mừng bạn!</h2>
                    <p>Đăng nhập để tiếp tục</p>
                </div>
                <div className="login-form">
                    <form>
                        <input 
                            type="email" 
                            placeholder="Email hoặc số điện thoại" 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Mật khẩu" 
                            required 
                        />
                        <button type="submit">Đăng nhập</button>
                    </form>
                    <div className="divider">Hoặc</div>
                    <div className="social-login">
                        <button className="social-btn google">
                            Đăng nhập với Google
                        </button>
                        <button className="social-btn facebook">
                            Đăng nhập với Facebook
                        </button>
                    </div>
                    <div className="forgot-signup">
                        <a href="#">Quên mật khẩu?</a> | <a href="#">Đăng ký ngay</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Customer/>, document.getElementById('root'));
