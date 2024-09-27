import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export const useFetch = (url: string) => {
  const [response, setResponse] = useState(null as any);
  const [loading, setLoader] = useState(false as boolean);
  const [error, setError] = useState(null as any);
  const dispatch = useDispatch();

  const reFetchData = async () => {
    try {
      setLoader(true);
      const { data } = await axios.get(url);
      dispatch($loginUser(data.data));
      setResponse(data.data);
    } catch (err) {
      setError(err?.response?.data);
    } finally {
      setLoader(false);
    }
  };

  return { response, loading, error, reFetchData };
};

export const customHooks = { useFetch };