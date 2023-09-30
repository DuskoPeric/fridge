<template>
  <div class="addItem">
    <div class="container holder">
      <div class="input-holder">
        <div class="add-focus" v-show="!isFocus" @click="focus">
          <img src="../assets/pl.png">
          <p>add new item</p>
        </div>
        <div class="input-handler" v-show="isFocus">
          <input v-model="itemText" type="text" ref="typeBox" @blur="handleBlur">
        </div>
        <div class="action-holder">
          <div
            v-show="isFocus && itemText"
            class="action-button side-button add-btn"
            @click="addNewItem"
          >
            <img src="../assets/pl.png">
          </div>
          <div class="action-button side-button" @click="open=!open">
            <img :class="{isOpen: open}" src="../assets/arr.png">
          </div>
        </div>
      </div>
      <transition>
        <div v-if="open" class="common-items">
          <span v-for="item in items" :key="item" @click="$emit('addCI',item)">{{item}}</span>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { nextTick } from "vue";
export default {
  data: () => ({
    itemText: "",
    open: false,
    isFocus: false
  }),
  props: {
    items: Object
  },
  name: "AddItem",
  methods: {
    addNewItem() {
      this.$emit("addNew", this.itemText);
      this.itemText = "";
      this.isFocus = false;
    },
    focus() {
      this.isFocus = true;
      nextTick(() => {
        this.$refs.typeBox.focus();
      });
    },
    handleBlur() {
      if (!this.itemText) {
        this.isFocus = false;
      }
    }
  }
};
</script>
<style scoped>
/* .v-enter-from {
  height: 0px;
}
.v-enter-active {
  transition: all 0.3s ease-out;
}
.v-enter-to {
  height: auto;
}
.v-leave-to {
  height: 0px;
}
.v-leave-active {
  transition: all 0.3s ease-out;
}
.v-leave-from {
  height: auto;
} */
.addItem {
  /* background: #2498ff; */
  /* height: 60px; */
  /* position: fixed; */
  top: 60px;
  left: 0px;
  width: 100%;
  border-radius: 0px 30px 30px 0px;
}
.holder {
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  padding-bottom: 20px;
  padding-top: 20px;
}
.input-holder {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.input-handler {
  display: flex;
}
.input-handler img {
  width: 20px;
  align-self: center;
  margin-left: 10px;
}
.action-holder {
  display: flex;
  align-items: center;
}
.holder .action-button.add-btn {
  background: #f0edf52e;
  width: 30px;
  height: 30px;
}
.holder input {
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  padding-left: 15px;
  width: 100%;
  height: 40px;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
}
.holder input:focus,
.holder input:focus-visible {
  outline: none;
}
.holder .action-button {
  width: 40px;
  height: 40px;
  max-width: 40px;
  max-height: 40px;
  border: none;
  font-size: 37px;
  font-weight: 100;
  /* position: absolute; */
  top: 0px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
  transition: all 0.2s ease-out;
  width: 20px;
}
.side-button img.isOpen {
  transition: all 0.2s ease-out;
  transform: rotate(180deg);
}
.add {
  right: 54px;
  background: #ffffff36;
  color: white;
}
.common-items {
  /* position: absolute; */
  /* top: 50px; */
  width: 100%;
  /* background: #2498ff; */
  display: flex;
  padding: 20px 20px 0px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  border-radius: 0px 30px 30px 30px;
}
.common-items span {
  padding: 5px 12px;
  border-radius: 5px;
  color: white;
  margin-bottom: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #4d2f80;
  font-weight: 300;
}
.add-focus {
  display: flex;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
}
.add-focus img {
  width: 16px;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: white;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: white;
}
</style>

