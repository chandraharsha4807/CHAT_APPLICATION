import { useEffect, useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");

    return tokenString ? JSON.parse(tokenString) : null;
  };

  const [token, setToken] = useState<string | null>(getToken());

  const saveToken = (userToken: string) => {
    setToken(userToken);
    sessionStorage.setItem("token", JSON.stringify(userToken));
    console.log(userToken);
  };

  useEffect(() => {}, [token]);

  return {
    saveToken,
    token,
  };
};

export default useToken;
