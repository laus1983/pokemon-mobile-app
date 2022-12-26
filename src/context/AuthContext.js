import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  user: undefined,
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);

  const valueContext = { auth };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
