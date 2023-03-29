<script>
export default {
	mounted() {
		this.$store.commit("getConsultation");
	},

	computed: {
		badge() {
			const consultation = this.$store.getters.consultation;

			if (consultation.status == "pending") {
				return "badge bg-secondary";
			} else if (consultation.status == "accepted") {
				return "badge bg-primary";
			} else if (consultation.status == "rejected") {
				return "badge bg-danger";
			}
		},
	},
};
</script>

<template>
	<table class="table table-striped border">
		<thead>
			<tr>
				<th colspan="2">Consultation</th>
			</tr>
		</thead>
		<tbody v-if="$store.getters.consultation.length == 0">
			<tr class="visually-hidden">
				<td></td>
			</tr>
			<tr>
				<td colspan="2">
					<a href="/">+ Request Consultation</a>
				</td>
			</tr>
		</tbody>
		<tbody v-else>
			<tr class="visually-hidden">
				<td></td>
			</tr>
			<tr>
				<td>Status</td>
				<td>
					<span :class="badge">{{ $store.getters.consultation.status }}</span>
				</td>
			</tr>
			<tr>
				<td>Disease History</td>
				<td>{{ $store.getters.consultation.disease_history }}</td>
			</tr>
			<tr>
				<td>Current Symptoms</td>
				<td>{{ $store.getters.consultation.current_symptoms }}</td>
			</tr>
			<tr>
				<td>Doctor Name</td>
				<td>{{ $store.getters.consultation.doctor }}</td>
			</tr>
			<tr>
				<td>Doctor Notes</td>
				<td>{{ $store.getters.consultation.doctor_notes }}</td>
			</tr>
		</tbody>
	</table>
</template>

<style>
th {
	background-color: rgba(0, 0, 0, 0.05) !important;
}
</style>
