import { useQuery } from "react-query";
import useServer from "./useServer";

const useFetchData = (path, initial, queryKey) => {
  const { serverReq } = useServer();
  const { data = initial, isLoading } = useQuery({
    queryKey: queryKey ? [...queryKey] : [],
    queryFn: async () => {
      const res = await serverReq.get(path);
      return await res.data;
    },
  });

  return { data, isLoading };
};

export default useFetchData;
