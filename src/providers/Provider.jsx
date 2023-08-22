import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./AuthProvider";

const queryClient = new QueryClient();

const Provider = ({ children }) => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default Provider;
