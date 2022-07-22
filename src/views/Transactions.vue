<template>
  <div class="d-flex flex-column py-3">
    <div class="d-flex justify-content-between container border-bottom border-2 p-2"
         v-for="transaction in transactions">
      <div class="d-flex flex-column align-items-start">
        <span>{{ userId === transaction.from ? `To ${transaction.to_user}` : `From ${transaction.from_user}` }}</span>
        <span>{{transaction.created_at}}</span>
      </div>
      <span>{{ userId === transaction.from ? '-' : '+' }} {{transaction.amount}}</span>
    </div>
  </div>
</template>

<script>
import API from "@/config/API";

export default {
  name: "Transaction",
  data() {
    return {
      transactions: [],
      userId: null
    }
  },

  mounted() {
    this.$store.dispatch("fetchProfile").then((response) => {
      this.userId = this.$store.state.authUser.id

      API.get('transactions').then(response => {
        console.log(response);
        this.transactions = response.data
        console.log(this.transactions)
      }).catch(error => {
        console.log(error);
        alert(error);
      })

    }).catch((error) => {
      console.log(error);
    })


  }
}
</script>

<style scoped>

</style>