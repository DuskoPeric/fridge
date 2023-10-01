<template>
  <div class="container login-holder">
    <input v-model="email" type="text" @focus="errors=false" placeholder="Email">
    <input v-model="password" type="password" @focus="errors=false" placeholder="Password">
    <div>
      <button @click="signIn()" :disabled="!email || !password">Log in</button>
    </div>
    <span v-if="errors">Email or password incorrect</span>
  </div>
</template>
<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
const auth = getAuth();

export default {
  name: "LoginPage",
  data: () => ({
    email: "",
    password: "",
    errors: false
  }),
  mounted() {
    onAuthStateChanged(auth, user => {
      if (user) {
        this.$router.push("/fridge");
      }
    });
  },
  methods: {
    signIn() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // Signed in
          console.log("user logged");
        })
        .catch(error => {
          console.log(error);
          this.errors = true;
        });
    }
  }
};
</script>
<style scoped>
.login-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 150px;
}
.login-holder input {
  width: 301px;
  max-width: 80%;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 18px;
  padding: 10px;
  box-sizing: border-box;
  background: #ffffff;
  color: #848e97;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
.login-holder div button {
  width: 100%;
  background: #463182;
  border: none;
  padding: 10px 20px;
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
}
.login-holder div button:disabled {
  background: #463182;
  color: #91949e;
}
input:focus,
.holder input:focus-visible,
button:focus {
  outline: none;
}
.login-holder div {
  width: 300px;
  max-width: 80%;
}
.login-holder span {
  display: block;
  width: 100%;
  margin-top: 14px;
  color: white;
}
</style>


