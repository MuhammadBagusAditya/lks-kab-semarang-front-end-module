import { createStore } from "vuex";
import axios from "axios";

export default createStore({
	state: {
		user: localStorage.getItem("USER") ?? JSON.stringify("{}"),
		userStatus: localStorage.getItem("USERSTATUS") ?? JSON.stringify(false),
		consultation: {},
		vaccinations: [],
	},

	mutations: {
		setUser(state, payload) {
			state.user = JSON.stringify(payload);
			localStorage.setItem("USER", JSON.stringify(payload));
			localStorage.setItem("USERSTATUS", JSON.stringify(true));
			state.userStatus = JSON.stringify(true);
		},

		clearUser(state) {
			localStorage.removeItem("USER");
			localStorage.setItem("USERSTATUS", JSON.stringify(false));
			state.user = "{}";
			state.userStatus = JSON.stringify(false);
		},

		async getConsultation(state) {
			const token = JSON.parse(state.user).token;
			try {
				const response = await axios.get(
					"http://127.0.0.1:8000/api/v1/consultations?token=" + token
				);

				state.consultation = response.data.consultation;
			} catch (err) {}
		},

		async getVaccinations(state) {
			const token = JSON.parse(state.user).token;

			try {
				const response = await axios.get(
					"http://127.0.0.1:8000/api/v1/vaccinations?token=" + token
				);

				state.vaccinations = response.data;
			} catch (err) {}
		},
	},

	getters: {
		user(state) {
			return JSON.parse(state.user);
		},

		userStatus(state) {
			return JSON.parse(state.userStatus);
		},

		consultation(state) {
			return state.consultation;
		},

		firstVaccination(state) {
			return (
				state.vaccinations.filter((val) => val.type == "first")[0] ?? false
			);
		},

		secondVaccination(state) {
			return (
				state.vaccinations.filter((val) => val.type == "second")[0] ?? false
			);
		},
	},
});
