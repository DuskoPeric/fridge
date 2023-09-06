<template>
  <header>
    <div class="container">
      <img class="logo" src="../assets/logo.png">
      <img class="logout" v-if="user" @click="signOut()" src="../assets/logout.png">
    </div>
  </header>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "../firebase/init";
import { initializeApp } from "firebase/app";
initializeApp(firebaseConfig);
const auth = getAuth();

export default {
  name: "TopHeader",
  data: () => ({
    user: false
  }),
  mounted() {
    onAuthStateChanged(auth, user => {
      if (user) {
        this.user = true;
      }
    });
  },
  methods: {
    signOut() {
      signOut(auth)
        .then(() => {
          localStorage.removeItem("user");
          this.user = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
header {
  background: #f0f4f7;
  height: 60px;
  position: fixed;
  top: 0px;
  width: 100%;
  left: 0px;
  display: flex;
}
header div {
  display: flex;
  justify-content: space-between;
  padding: 3px 16px 3px 0px;
  box-sizing: border-box;
}
.logo {
  width: 130px;
}
.logout {
  width: 26px;
  align-self: center;
  cursor: pointer;
}
</style>


