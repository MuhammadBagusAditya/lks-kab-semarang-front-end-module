<script>
export default {
	name: "firstVaccinationTable",

	computed: {
		badge() {
			if (this.$store.getters.firstVaccination.status == "vaccinated") {
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
				<th colspan="2">First Vaccination</th>
			</tr>
		</thead>
		<tbody v-if="!$store.getters.firstVaccination">
			<tr class="visually-hidden">
				<td></td>
			</tr>
			<tr>
				<td colspan="2">
					<a href="/">+ Request Vaccination</a>
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
						$store.getters.firstVaccination.status
					}}</span>
				</td>
			</tr>
			<tr>
				<td>Date</td>
				<td>{{ $store.getters.firstVaccination.vaccination_at }}</td>
			</tr>
			<tr>
				<td>Spot</td>
				<td>{{ $store.getters.firstVaccination.spot.name }}</td>
			</tr>
			<tr>
				<td>Vaccine</td>
				<td>{{ $store.getters.firstVaccination.vaccine }}</td>
			</tr>
			<tr>
				<td>Vaccinator</td>
				<td>{{ $store.getters.firstVaccination.vaccinator }}</td>
			</tr>
		</tbody>
	</table>
</template>
