<template>
  <div
      style="height: 100vh"
      class="d-flex justify-content-center align-items-center"
  >
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h2>User Upgrade</h2>
          <form>
            <!-- Profile image input -->
            <div class="form-outline mb-2">
              <label class="form-label d-flex justify-content-left" for="form4Example3">Phone</label>

              <input type="number" class="form-control" id="form4Example3"/>
            </div>

            <!-- Nrc Number input -->
            <div class="form-outline mb-2">
              <label class="form-label d-flex justify-content-left" for="form4Example4">Nrc</label>

              <input type="text" class="form-control" id="form4Example4"/>
            </div>

<!--            &lt;!&ndash; Message input &ndash;&gt;-->
<!--            <div class="form-outline mb-2">-->
<!--              <label class="form-label d-flex justify-content-left" for="form4Example5">Profile Image</label>-->

<!--              <input type="file" class="form-control" id="form4Example5"/>-->
<!--            </div>-->

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LevelUpView"
}
</script>

<style scoped>

</style>