<template>
  <v-container>
    <v-row>
      <v-col class="ml-auto mr-auto" cols="6">
        <div class="rounded-lg elevation-2">
          <v-toolbar
            class="rounded-t-lg bg-cyan"
            title="Register"
          ></v-toolbar>

          <div class="pt-2 pb-2 pl-4 pr-4 ">
            <input
              type="email"
              name="email"
              v-model="email"
              placeholder="E-mail"
            ><br>

            <input
              type="password"
              name="password"
              v-model="password"
              placeholder="Password"
            ><br>
            
            <div class="error" v-html="error"/><br>

            <v-btn
              class="bg-cyan"
              @click="register"
            >Register</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {

  data() { return {

    email   : '',
    password: '',
    error   : null

  } },
  methods: {

    async register() {

      try           { await AuthenticationService.register({ email: this.email, password: this.password }); }
      catch (error) { this.error = error.response.data.error; }

    }

  }
  
}
</script>

<style>
.error {

  color: red;
  
}
</style>