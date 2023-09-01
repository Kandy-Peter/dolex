import axios from "axios";
import { useEffect, useState } from "react";

const magoUrl = process.env.EXPO_PUBLIC_MAGO_API;

const useFetch = (endpoint: string, query?: object) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `${magoUrl}/${endpoint}`,
    params: { ...query },
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  };

  const fecthData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      console.log("response", response);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
      console.log("errors:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fecthData();
    console.log("data", data);
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fecthData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
