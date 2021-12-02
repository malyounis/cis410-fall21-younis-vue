<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ nameFirst }}'s Phone Preferences</h3>

    <p vi-if="accountError" class="text-danger">
      Cannot get your account information, please try again later.
    </p>
    <table v-if="preferencesByUser" class="table">
      <thead>
        <th>Phone</th>
        <th>Color</th>
        <th>Storage Size</th>
        <th>Screen Size</th>
      </thead>
      <tbody>
        <tr
          v-for="thisPref in contactPreference"
          :key="thisPref.ContactPreferencesPK"
        >
          <th>
            <router-link :to="`/product/${thisPref.ProductFK}`">{{
              thisPref.ProductFK
            }}</router-link>
          </th>
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
      })
      .catch(() => {
        this.accountError = true;
        console.log("error");
      });
  },
};
</script>

<style></style>
