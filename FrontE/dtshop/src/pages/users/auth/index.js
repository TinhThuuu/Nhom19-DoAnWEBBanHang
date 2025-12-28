import { memo, useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { postLoginAPI } from "api/loginPage";
import axios from "api/axios";
import { ReactSession } from "react-client-session";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTERS } from "utils/router";
import { SESSION_KEYS } from "utils/constant";
import "./style.scss";

const postRegister = async (data) => {
  return await axios({ url: `/register`, method: "POST", data });
};

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // read query params to prefill email and open register view
    const params = new URLSearchParams(location.search);
    const emailParam = params.get('email');
    const registerParam = params.get('register');
    if (emailParam) setEmail(emailParam);
    if (registerParam) setIsRegister(true);
  }, [location.search]);

  const { mutate: login } = useMutation({
    mutationFn: postLoginAPI,
    onSuccess: (data) => {
      if (data.is_admin) {
        // admin -> navigate to admin login page
        navigate(ROUTERS.ADMIN.ORDERS);
      } else if (data.user) {
        ReactSession.set(SESSION_KEYS.USER, data.user);
        alert(data.message || 'Đăng nhập thành công');
        navigate('/');
      }
    },
    onError: (err) => alert(err.response?.data?.error || 'Đăng nhập thất bại'),
  });

  const { mutate: register } = useMutation({
    mutationFn: postRegister,
    onSuccess: (data) => {
      ReactSession.set(SESSION_KEYS.USER, data.user);
      alert(data.message || 'Đăng ký thành công');
      navigate('/');
    },
    onError: (err) => alert(err.response?.data?.message || 'Đăng ký thất bại'),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      register({ name, email, password });
    } else {
      login({ email, password });
    }
  };

  const goHome = () => navigate('/');

  return (
    <div className="auth-page">
      <button type="button" className="back-home outside" onClick={goHome}>Trở về trang chủ</button>
      <div className="auth-container">
        <div className="auth-top">
          <h2>{isRegister ? "Đăng ký" : "Đăng nhập"}</h2>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          {isRegister && (
            <div className="field">
              <label>Họ và tên</label>
              <input value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          )}
          <div className="field">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="field">
            <label>Mật khẩu</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="auth-actions">
            <div className="auth-toggle">
              <button type="button" onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? "Đã có tài khoản? Đăng nhập" : "Chưa có tài khoản? Đăng ký"}
              </button>
            </div>
            <div>
              <button type="submit" className="submit">{isRegister ? "Đăng ký" : "Đăng nhập"}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(AuthPage);
