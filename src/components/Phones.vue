<template>
  <div>
    <h1>Phones</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <!-- has a title, pitch text, genre, empty section for details, like product/4 -->
          <th>Color</th>
          <th>Storage</th>
          <th>Screen Size</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aPhone in thePhones" :key="aPhone.ProductPK">
          <th>{{ aPhone.Color }}</th>
          <th>{{ aPhone.Storage }}</th>
          <th>{{ aPhone.ScreenSize }}</th>
          <th>
            <router-link :to="`/phones/${aPhone.ProductTypePK[0]}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    thePhones() {
      return this.$store.state.phones;
    },
  },
};
</script>

<style></style>
