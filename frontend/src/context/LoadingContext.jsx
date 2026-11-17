import { createContext, useContext, useState } from "react";
import Loader from "../components/common/Loader";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return (
    <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
      {loading && <Loader />}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
