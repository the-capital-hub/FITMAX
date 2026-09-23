import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import authService from "../services/authService";
import userService from "../services/userService";

import {
  saveAuthSession,
  getAuthToken,
  clearAuthSession,
} from "../utils/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] =
    useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifySession = async () => {
      const token = getAuthToken();

      if (!token) {
        clearAuthSession();
        setUser(null);
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const data =
          await userService.getProfile();

        const verifiedUser = data.user;

        if (!verifiedUser) {
          throw new Error(
            "User profile was not returned"
          );
        }

        saveAuthSession(
          token,
          verifiedUser
        );

        setUser(verifiedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error(
          "Session verification failed:",
          error.message
        );

        clearAuthSession();
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, []);

  const login = async (credentials) => {
    const data =
      await authService.login(credentials);

    const token =
      data.token || data.accessToken;

    const loggedInUser =
      data.user ||
      data.data?.user ||
      null;

    if (!token) {
      throw new Error(
        "Authentication token was not returned"
      );
    }

    if (!loggedInUser) {
      throw new Error(
        "User information was not returned"
      );
    }

    saveAuthSession(
      token,
      loggedInUser
    );

    setUser(loggedInUser);
    setIsAuthenticated(true);

    return data;
  };

  const register = async (userData) => {
    const data =
      await authService.register(userData);

    return data;
  };

  const logout = () => {
    clearAuthSession();

    setUser(null);
    setIsAuthenticated(false);
  };

  const forgotPassword = async (email) => {
    return authService.forgotPassword(email);
  };

  const resetPassword = async (
    token,
    password
  ) => {
    return authService.resetPassword(
      token,
      password
    );
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}

export default AuthContext;