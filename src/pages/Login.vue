<script>
import axios from "axios";

export default {
	name: "login",

	data() {
		return {
			errorMessage: "",
		};
	},

	methods: {
		async sendLoginRequest(e) {
			const formData = new FormData(e.target);

			const data = {
				id_card_number: formData.get("id_card_number"),
				password: formData.get("password"),
			};

			try {
				const response = await axios.post(
					"http://127.0.0.1:8000/api/v1/auth/login",
					JSON.stringify(data)
				);

				this.$store.commit("setUser", response.data);

				e.target.reset();

				this.$router.push({ name: "home" });
			} catch (err) {
				this.errorMessage = err.response.data.message;
			}
		},
	},
};
</script>

<template>
	<div class="container pt-3">
		<div class="row justify-content-center">
			<div
				class="col-md-4 px-4 py-2 d-flex flex-column align-items-center form rounded"
			>
				<img
					src="/logo.jpg"
					alt="logo"
					class="logo"
				/>

				<h3 class="text-center mb-3">Society Login</h3>

				<div
					class="alert alert-danger w-100"
					role="alert"
					v-if="errorMessage"
				>
					{{ errorMessage }}
				</div>

				<form
					@submit.prevent="sendLoginRequest"
					class="w-100"
				>
					<div class="mb-3">
						<input
							type="text"
							class="form-control w-100"
							placeholder="ID Card Number"
							aria-label="id card number input"
							name="id_card_number"
						/>
					</div>
					<div class="mb-3">
						<input
							type="password"
							class="form-control w-100"
							placeholder="Password"
							aria-label="password input"
							name="password"
						/>
					</div>
					<div class="mb-3">
						<button
							class="btn btn-primary w-100"
							type="submit"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style>
body {
	background-color: rgba(211, 211, 211, 0.3);
}
.logo {
	width: 100px;
	height: 100px;
}
.form {
	background-color: white;
}
</style>
