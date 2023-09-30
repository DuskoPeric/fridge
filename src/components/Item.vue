<template>
  <div v-if="item" class="item-holder">
    <div class="main" @click="$emit('edit')">
      <div :class="{ done: item.done }">
        <img v-if="item.done" src="../assets/check.png">
      </div>
      <p :class="{ done: item.done }">{{item.name}}</p>
    </div>
    <button class="delete" @click="$emit('delete')">
      <img src="../assets/del.png">
    </button>
  </div>
</template>

<script>
export default {
  name: "Item",
  data: () => ({
    checked: false
  }),
  props: {
    item: Object
  }
};
</script>
<style scoped>
.item-holder {
  background: #f0edf5;
  width: 480px;
  max-width: 90%;
  margin: auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  box-sizing: border-box;
  margin-bottom: 15px;
  color: #07bc87;
  -webkit-box-shadow: 3px 3px 0px 0px rgba(70, 49, 130, 0.24);
  -moz-box-shadow: 3px 3px 0px 0px rgba(70, 49, 130, 0.24);
  box-shadow: 3px 3px 0px 0px rgba(70, 49, 130, 0.24);
  align-items: center;
}
.delete {
  width: 22px;
  max-width: 22px;
  height: 22px;
  max-height: 22px;
  background: #ffff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.delete img {
  width: 10px;
}
.main {
  display: flex;
  align-items: center;
}
.main p {
  font-size: 16px;
  font-weight: 600;
  color: #797789;
}
.main p.done {
  text-decoration: line-through;
  color: #797789;
}
.main div {
  width: 15px;
  max-width: 15px;
  max-height: 15px;
  height: 15px;
  border: solid 2px #463182;
  margin-right: 15px;
  margin-left: 5px;
  border-radius: 50%;
  background: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main div.done {
  background: #463182;
  border: solid 2px #463182;
}
.main div img {
  width: 10px;
}
</style>



