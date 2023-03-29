<script>
import ConsultationTable from "./../components/ConsultationTable.vue";
import FirstVaccinationTable from "./../components/FirstVaccinationTable.vue";
import SecondVaccinationTable from "./../components/SecondVaccinationTable.vue";

export default {
	name: "home",
	components: {
		ConsultationTable,
		FirstTable: FirstVaccinationTable,
		SecondTable: SecondVaccinationTable,
	},

	mounted() {
		this.$store.commit("getVaccinations");
	},
};
</script>

<template>
	<div class="container-fluid jumbotron">
		<div class="container d-flex align-items-center">
			<h2>Dashboard</h2>
		</div>
	</div>

	<div class="container mt-3">
		<h4 class="text-secondary">My Consultation</h4>
		<div class="col-md-4">
			<ConsultationTable />
		</div>
	</div>

	<div class="container mt-5">
		<h4 class="text-secondary">My Vaccinations</h4>

		<div
			class="alert alert-warning"
			v-if="$store.getters.consultation?.status != 'accepted'"
		>
			Your consultation must be approved by doctor to get the vaccine.
		</div>

		<section
			class="row gap-5"
			v-else
		>
			<div class="col-md-4">
				<FirstTable />
			</div>
			<div
				class="col-md-4"
				v-if="$store.getters.firstVaccination?.status == 'vaccinated'"
			>
				<SecondTable />
			</div>
		</section>
	</div>
</template>

<style scoped>
.jumbotron {
	background-color: rgba(0, 0, 0, 0.2);
	min-height: 20vh;
}

.jumbotron .container {
	min-height: 20vh;
}
</style>

<style>
table a {
	text-decoration: none !important;
}
</style>
