<template>
  <div>
    <div class="card-body">
      <h4>Add Your Preference</h4>
      <form id="review-form" @submit.prevent="submitPreference">
        <div class="mb-3">
          <label for="rating-input" class="form-label">Color</label
          ><input
            type="text"
            class="form-control"
            id="rating-input"
            required=""
            v-model="color"
          />
        </div>
        <div class="mb-3">
          <label for="summary-input" class="form-label">Storage</label
          ><input
            type="number"
            row="3"
            class="form-control"
            id="summary-input"
            required=""
            v-model="storage"
          />
        </div>
        <div class="mb-3">
          <label for="summary-input" class="form-label">Screen Size</label
          ><input
            type="number"
            step="0.01"
            row="3"
            class="form-control"
            id="summary-input"
            required=""
            v-model="screenSize"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit Preference</button
        ><button
          v-on:click="cancelPreference"
          type="clear"
          class="btn btn-outline-danger"
        >
          Cancel
        </button>
        <p v-if="errorMessage" class="form-text text-danger">
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      color: "",
      storage: null,
      screenSize: null,
      errorMessage: null,
    };
  },
  methods: {
    submitPreference() {
      let myPreference = {
        color: this.color,
        storage: this.storage,
        screenSize: this.screenSize,
        productFK: Number(this.$route.params.pk),
      };
      console.log(myPreference);
      axios
        .post("/contactpref", myPreference, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .then(() => {
          this.$router.replace("/account");
        })
        .catch(() => {
          this.errorMessage =
            "Unable to create a review, please try again later.";
        });
    },
    cancelPreference() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>
