import { router, useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

import { AuthContextValue } from "@/types/user";

export const AuthContext = createContext({}) as any;

export function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}

function useProtectedRoutes(user: any) {
  const segments = useSegments();

  useEffect(() => {
    const isAuthGroup = segments[0] === "auth";

    if (isAuthGroup && user) {
      router.replace("/");
    } else {
      router.replace("/sign-in");
    }
  }, [segments]);
  return null;
}

export function AuthProvider({ children }: any) {
  const [user, setAuth] = useState<null | any>(null);

  useProtectedRoutes(user);

  const value = {
    signIn: () => setAuth({}),
    signOut: () => setAuth(null),
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
