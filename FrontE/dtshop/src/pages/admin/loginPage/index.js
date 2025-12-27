import { memo, useState } from "react";
import "./style.scss";
import { useMutation } from "@tanstack/react-query";
import { postLoginAPI } from "api/loginPage";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";

const LoginAdPage = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: postLoginAPI,

    onSuccess: (data) => {
      if (data.is_admin) {
        navigate(ROUTERS.ADMIN.ORDERS);
      } else {
        alert('Không có quyền truy cập hệ thống quản trị');
      }
    },

    onError: (error) => {
      alert(error.response?.data?.error);
    },
  });

  const validateForm = () => {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Vui lòng nhập một email hợp lệ!");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 3) {
      setPasswordError("Mật khẩu phải có ít nhất 3 ký tự!");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(ROUTERS.ADMIN.ORDERS);
    if (validateForm()) {
      login({ email, password });
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__title">TRUY CẬP HỆ THỐNG QUẢN TRỊ</h2>
        {/* Form login */}
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-group">
            <label htmlFor="email" className="login__label">
              Địa chỉ email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="login__form-group">
            <label htmlFor="password" className="login__label">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <button type="submit" className="login__button" disabled={isLoading}>
            ĐĂNG NHẬP
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(LoginAdPage);