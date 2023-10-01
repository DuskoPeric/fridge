<template>
    <div :class="{open:isShow}" class="log-out">
        <div @click="handleShow" class="arrow-toggle">
            <img :class="{up:isShow}" class="arrow" src="../assets/arr.png">
        </div>
        <div class="logout-holder">
            <div>
                <img class="logout" v-if="user" @click="popupOpen=true" src="../assets/lo.png">
            </div>
            
        </div>
        <div v-if="popupOpen" class="popup">
            <div class="popup-box">
                <div @click="popupOpen=false;isShow=false" class="close-icon"><img src="../assets/del.png"/></div>
                <div class="popup-text">Are you sure you want to log out?</div>
                <div class="popup-action">
                    <div @click="signOut">Yes</div>
                    <div @click="popupOpen=false;isShow=false">No</div>
                </div>
            </div>


        </div>
    </div>
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
    user: false,
    isShow:false,
    popupOpen:false,
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
    },
    handleShow(){
        this.isShow=!this.isShow;
    }
  }
};
</script>
<style scoped>
.popup{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000000a6;
    display: flex;
    justify-content: center;
    align-items: center;
}
.popup-box{
    width: 300px;
    max-width: 90%;
    background: white;
    position: relative;
    box-sizing: border-box;
    padding: 60px 20px 30px 20px;
}
.close-icon{
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #d7d7d7;
    position: absolute;
    right: 10px;
    top: 10px;
}
.close-icon img{
    width: 15px;
    margin-left: 2px;
}
.popup-text{
    color: black;
    font-weight: 500;
}
.popup-action{
    display: flex;
    width: 200px;
    justify-content: space-between;
    margin: auto;
    margin-top: 20px;
}
.popup-action div{
    width: 80px;
    background: #463284;
    padding: 5px 0px;
    box-sizing: border-box;
    font-weight: 700;
    cursor: pointer;
}
.popup-action div:last-child{
    background: gray;
    color: #463284;
}
.log-out{
    position: fixed;
    bottom: -50px;
    width: 100px;
    left: 50%;
    margin-left: -50px;
    transition: all 0.1s ease-out;
}
.log-out.open{
    bottom: 0px;
    transition: all 0.1s ease-out;
}
.arrow-toggle{
    background: #5664acbf;
    border-radius: 10px 10px 0px 0px;
    width: 50px;
    margin: auto;
    height: 25px;
    padding-top: 3px;
    box-sizing: border-box;
}
.arrow-toggle img{
    width: 20px;
    transform: rotate(180deg);
    transition: all 0.1s ease-out;
}
.arrow-toggle img.up{
    width: 20px;
    transform: rotate(0deg);
    transition: all 0.1s ease-out;
}
.logout-holder{
    width: 100%;
    height: 50px;
    border-radius: 10px 10px 0px 0px;
    background: white;
    padding-top: 5px;
    box-sizing: border-box;
      -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

}
.logout-holder div{
    width: 40px;
    height: 40px;
    background: #e4dcf1;
    border-radius: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logout {
  width: 25px;
  align-self: center;
  cursor: pointer;
}
</style>


