<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ nameFirst }}'s Phone Preferences</h3>
    <table class="table">
      <thead>
        <!-- 15,1 22,50 video, stopped at 15.04 because of the linking issue -->
        <th>Color</th>
        <th>Storage Size</th>
        <th>Screen Size</th>
      </thead>
      <tbody>
        <tr
          v-for="thisPref in contactPreference"
          :key="thisPref.ContactPreferencesPK"
        >
          <th>{{ thisPref.Color }}</th>
          <th>{{ thisPref.Storage }}</th>
          <th>{{ thisPref.ScreenSize }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      contactPreference: null,
      accountError: false,
    };
  },
  computed: {
    nameFirst() {
      return this.$store.state.user.NameFirst;
    },
  },
  created() {
    axios
      .get("/contactpref/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        this.preferencesByUser = theResponse.data;
      });
  },
};
</script>

<style></style>
