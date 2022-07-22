<template>
  <div class="container">
    <div class="card mt-3 d-flex justify-items-left">
      <div class="card-header d-flex justify-content-start align-items-start flex-column p-3" v-if="recipientId">
        Transferring to <span>{{ recipientName }}</span> <span @click="reset"
                                                               class="text-decoration-underline">Not this user</span>
      </div>

      <div class="card-header d-flex justify-content-start align-items-start flex-column p-3" v-if="!recipientId">
        <label for="email" class="d-flex justify-content-left mb-3">Recipient's email or phone number</label>
        <input class="form-control" id="email" autofocus placeholder="someone@somewhere.com" v-model="recipient">

        <button class="form-control btn-primary my-3" @click="searchRecipient">Search</button>
      </div>


      <div class="card-header d-flex justify-content-start align-items-start flex-column p-3"
           v-if="recipientId && !requiredPin">
        <label for="amount" class="d-flex justify-content-left mb-3">Transfer Amount</label>
        <input class="form-control" id="amount" type="number" autofocus placeholder="someone@somewhere.com"
               v-model="amount">

        <button class="form-control btn-primary my-3" @click="confirm">Confirm</button>
      </div>

      <div class="card-header d-flex justify-content-start align-items-start flex-column p-3" v-if="recipientId && requiredPin">
        Amount <span>{{ amount }}</span>
      </div>


    </div>
    <div class="card mt-3 d-flex justify-items-left" v-if="requiredPin">
      <div class="card-header d-flex justify-content-center align-items-center flex-column p-3">
        <PincodeInput v-model="pin" :length="6" placeholder="0"/>
        <button class="form-control btn-primary my-3" @click="transfer">Transfer</button>
      </div>
    </div>

  </div>
</template>

<script>
import PincodeInput from "vue-pincode-input";
import API from "@/config/API";

export default {
  name: "Transaction",
  data() {
    return {
      recipient: '',
      recipientId: '',
      recipientName: '',
      amount: 0.0,
      showPinModel: false,
      myModel: true,
      pin: '',
      requiredPin: false
    }
  },

  components: {
    PincodeInput,
  },

  mounted() {
    this.checkIfTheTransferStartedFromQR()
  },

  methods: {
    checkIfTheTransferStartedFromQR() {
      const {recipient} = this.$route.params
      this.recipient = recipient
      if (this.recipient) {
        this.searchRecipient()
      }
    },

    searchRecipient() {
      if (this.recipient) {
        API.get(`recipient?recipient=${this.recipient}`).then(response => {
          const recipient = response.data
          this.recipientId = recipient.id
          this.recipientName = recipient.name
        }).catch((error) => {
          console.log(`No recipient found for ${this.recipient}`)
        })
      } else {
        alert("Recipient email or phone number must not be empty")
      }
    },

    confirm() {
      if (this.amount <= 0) {
        alert("Transfer amount should not be equal to or less than 0.0")
      } else {
        this.requiredPin = true;
      }
    },

    reset() {
      this.recipientId = null;
      this.recipientName = null;
      this.amount = null;
      this.recipient = null;
      this.requiredPin =false
    },

    transfer() {
      API.post('transfer', {
        user_id: this.recipientId,
        amount: this.amount,
        pin: this.pin
      }).then((response) => {
        alert('successfully transferred')
        this.reset()
      }).catch((e) => {
        console.log(e)
        alert(e)
      })
    }
  }
}
</script>

<style scoped>

</style>