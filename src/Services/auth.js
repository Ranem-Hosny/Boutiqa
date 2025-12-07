import axios from "axios";

export async function handleLogin(email,password) {
  try {
    const response = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      {
        email: email,
        password: password,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("error", err);
  }
}
