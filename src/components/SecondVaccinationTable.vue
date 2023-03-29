<script>
export default {
	name: "secondVaccinationTable",
	computed: {
		badge() {
			if (this.$store.getters.secondVaccination.status == "vaccinated") {
				return "badge bg-primary";
			} else {
				return "badge bg-secondary";
			}
		},
	},
};
</script>

<template>
	<table class="table table-striped border">
		<thead>
			<tr>
				<th colspan="2">Second Vaccination</th>
			</tr>
		</thead>
		<tbody v-if="!$store.getters.secondVaccination">
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
					<span :class="badge">{{
						$store.getters.secondVaccination.status
					}}</span>
				</td>
			</tr>
			<tr>
				<td>Date</td>
				<td>{{ $store.getters.secondVaccination.vaccination_at }}</td>
			</tr>
			<tr>
				<td>Spot</td>
				<td>{{ $store.getters.secondVaccination.spot.name }}</td>
			</tr>
			<tr>
				<td>Vaccine</td>
				<td>{{ $store.getters.secondVaccination.vaccine }}</td>
			</tr>
			<tr>
				<td>Vaccinator</td>
				<td>{{ $store.getters.secondVaccination.vaccinator }}</td>
			</tr>
		</tbody>
	</table>
</template>
