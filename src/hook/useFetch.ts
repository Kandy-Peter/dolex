import axios from "axios";
import { useEffect, useState } from "react";

import HandleCountryName from "@/utils/handleCountryCode";

const magoUrl = process.env.EXPO_PUBLIC_MAGO_API;

const useFetch = (endpoint: string, page?: number | 1) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  let pages = 1;
  const countryName = HandleCountryName();

  const options = {
    method: "GET",
    url: `${magoUrl}/${endpoint}`,
    params: {
      country: countryName,
      page,
    },
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  };

  const fecthData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.request(options);

      setData(data.data || []);
      pages = data.pages;
      setIsLoading(false);
      setError(false);
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
  }, [countryName]);

  const refetch = () => {
    setIsLoading(true);
    fecthData();
  };

  return { data, isLoading, error, refetch, pages };
};

export default useFetch;
