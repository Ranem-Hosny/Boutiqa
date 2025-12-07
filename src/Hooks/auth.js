import { useEffect, useState } from "react";
import { handleLogin } from "../Services/auth";

export function useLogin({email,password}) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!email || !password) return;

    const fetchData = async () => {
      const result = await handleLogin(email, password);
      if(result) return setUser(result)
    };
    fetchData();
  }, [email, password]);

  return user
}
