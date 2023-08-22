import axios from "axios";
import { useQuery } from "react-query";

const useFetchData = (path, initial, queryKey) => {
  const { data = initial, isLoading } = useQuery({
    queryKey: queryKey ? [...queryKey] : [],
    queryFn: async () => {
      const res = await axios.get(
        `https://shanto-mart-server.vercel.app${path}`
      );
      return await res.data;
    },
  });

  return { data, isLoading };
};

export default useFetchData;
