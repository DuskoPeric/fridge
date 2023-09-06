<template>
  <div class="addItem">
    <div class="container holder">
      <input v-model="itemText" type="text" placeholder="add new item">
      <button class="add" :disabled="!itemText" @click="addNewItem">+</button>
      <button class="side-button" @click="open=!open">
        <img v-if="!open" src="../assets/sm.png">
        <img v-else src="../assets/close.png">
      </button>
      <transition>
        <div v-if="open" class="common-items">
          <span v-for="item in items" :key="item" @click="$emit('addCI',item)">{{item}}</span>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    itemText: "",
    open: false
  }),
  props: {
    items: Object
  },
  name: "AddItem",
  methods: {
    addNewItem() {
      this.$emit("addNew", this.itemText);
      this.itemText = "";
    }
  }
};
</script>
<style scoped>
.v-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.v-enter-active {
  transition: all 0.3s ease-out;
}
.v-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-active {
  transition: all 0.3s ease-out;
}
.v-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.addItem {
  background: #2498ff;
  height: 60px;
  position: fixed;
  top: 60px;
  left: 0px;
  width: 100%;
  border-radius: 0px 30px 30px 0px;
  display: flex;
}
.holder {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
}
.holder input {
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  padding-left: 15px;
  width: 100%;
  height: 40px;
}
.holder input:focus,
.holder input:focus-visible {
  outline: none;
}
.holder button {
  width: 40px;
  height: 40px;
  border: none;
  font-size: 37px;
  font-weight: 100;
  position: absolute;
  top: 0px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.side-button {
  right: 10px;
  background: transparent;
  color: #07bc87;
  display: flex;
  align-items: center;
  justify-content: center;
}
.side-button img {
  width: 20px;
}
.add {
  right: 54px;
  background: #ffffff36;
  color: white;
}
.common-items {
  position: absolute;
  top: 51px;
  width: 100%;
  background: #2498ff;
  display: flex;
  padding: 20px 20px 10px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  border-radius: 0px 30px 30px 30px;
}
.common-items span {
  padding: 5px 20px;
  border-radius: 20px;
  color: #2498ff;
  margin-bottom: 15px;
  margin-right: 10px;
  font-size: 18px;
  background: white;
  font-weight: 600;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #ffffff70;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #ffffff70;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #ffffff70;
}
</style>

