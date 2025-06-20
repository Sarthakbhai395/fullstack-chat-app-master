import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

const useChatStore = create((set) => ({
  authUser: null,
  socket: null,

  signup: async (userData) => {
    try {
      const res = await axiosInstance.post("/api/auth/signup", userData);
      set({ authUser: res.data });
      toast.success("Signup successful!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Signup failed");
    }
  },

  login: async (credentials) => {
    try {
      const res = await axiosInstance.post("/api/auth/login", credentials);
      set({ authUser: res.data });
      toast.success("Login successful!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/api/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  },

  setSocket: (socket) => set({ socket }),
  setAuthUser: (user) => set({ authUser: user }),
}));

// ✅ Add named export
export { useChatStore };
