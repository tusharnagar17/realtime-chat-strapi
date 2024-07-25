import axios from "axios";

export const api_url = process.env.NEXT_PUBLIC_STRAPI_URL;

export const loginRequest = async (username, password) => {
  try {
    const res = await axios.post(`${api_url}/api/auth/local`, {
      identifier: username,
      password: password,
    });
    // console.log("Login response", res);
    localStorage.setItem("token", res.data.jwt);
    return res.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const registerRequest = async (username, email, password) => {
  try {
    const res = await axios.post(`${api_url}/api/auth/local/register`, {
      username: username,
      email: email,
      password: password,
    });
    console.log("register response", res);
    return res.data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};

export const getCurrentUser = async (token) => {
  try {
    const res = await axios.get(`${api_url}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response within it", res);
    return res.data;
  } catch (error) {
    console.log("JwtCheck error:", error);
    throw error;
  }
};
