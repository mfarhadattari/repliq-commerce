import { useQuery } from "react-query";
import useServer from "./useServer";

const useFetchData = (path, initial, queryKey) => {
  const { serverReq } = useServer();
  const {
    data = initial,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: queryKey ? [serverReq, ...queryKey] : [serverReq],
    queryFn: async () => {
      const res = await serverReq.get(path);
      return await res.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useFetchData;
