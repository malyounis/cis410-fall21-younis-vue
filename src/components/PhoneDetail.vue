<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">Phone Preference Details</h2>
        <br />
        <p>
          Color: <br /><strong>{{ phone.Color }}</strong>
        </p>
        <p>
          Storage: <br /><strong>{{ phone.Storage }} GB</strong>
        </p>
        <p>
          Screen Size: <br /><strong>{{ phone.ScreenSize }} inches</strong>
        </p>
        <p>
          Price: <br /><strong>{{ formattedPrice }}</strong>
        </p>
      </div>
    </div>
    <br />
    <router-link v-if="auth" :to="`/phones/${this.$route.params.pk}/preference`"
      ><button class="btn btn-success">Add a Preference</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign In to Add a Preference
      </button></router-link
    >
    <br />
    <br />

    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    phone() {
      let allPhones = this.$store.state.phones;

      let thisPhone = allPhones.find((aPhone) => {
        return aPhone.ProductTypePK[0] == this.$route.params.pk;
      });
      return thisPhone;
    },
    formattedPrice() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.phone.Price);
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
