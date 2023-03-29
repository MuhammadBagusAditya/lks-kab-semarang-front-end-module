<script>
import axios from "axios";

export default {
	name: "navbar",

	methods: {
		async sendLogoutRequest(e) {
			const token = this.$store.getters.user?.token;

			try {
				const response = await axios.post(
					"http://127.0.0.1:8000/api/v1/auth/logout?token=" + token
				);

				this.$store.commit("clearUser");

				alert("Logout success");

				this.$router.push({ name: "login" });
			} catch (err) {
				alert(err.response.data.message);
			}
		},
	},
};
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<div class="container">
			<a
				href="/"
				class="navbar-brand"
				>Vaccination Platform</a
			>

			<div
				class="collapse navbar-collapse"
				v-if="$store.getters.userStatus"
			>
				<div class="navbar-nav ms-auto">
					<a
						href="/"
						class="nav-link"
						>{{ $store.getters.user?.name }}</a
					>
					<span
						class="nav-link cursor-pointer"
						@click="sendLogoutRequest"
						>Logout</span
					>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.cursor-pointer {
	cursor: pointer;
}
</style>
