<template>
  <div>
    <h1>Phones</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <!-- has a title, pitch text, genre, empty section for details, like product/4 -->
          <th></th>
        </tr>
      </thead>
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
