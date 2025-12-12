import type { loginProps } from "../model/login";
import axiosInstance from "../utils/axiosInstance";

export default {
	login: async (payload: loginProps) => {
		await axiosInstance.get("/sanctum/csrf-cookie");
		const res = await axiosInstance.post("/login", payload);
		return res;
	},

	register: async (payload: loginProps) => {
		await axiosInstance.get("/sanctum/csrf-cookie");
		const res = await axiosInstance.post("/register", payload);
		return res;
	},
};
