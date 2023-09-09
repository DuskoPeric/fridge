<template>
  <div v-if="item" class="item-holder">
    <div class="main" @click="$emit('edit')">
      <div :class="{ done: item.done }">
        <img v-if="item.done" src="../assets/check.png">
      </div>
      <p :class="{ done: item.done }">{{item.name}}</p>
    </div>
    <button class="delete" @click="$emit('delete')">
      <img src="../assets/trash.png">
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
  background: #ffffff;
  width: 480px;
  max-width: 90%;
  margin: auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
  color: #07bc87;
  -webkit-box-shadow: 5px 5px 0px 0px rgba(223, 232, 237, 1);
  -moz-box-shadow: 5px 5px 0px 0px rgba(223, 232, 237, 1);
  box-shadow: 5px 5px 0px 0px rgba(223, 232, 237, 1);
  align-items: center;
}
.delete {
  width: 30px;
  max-width: 30px;
  height: 30px;
  max-height: 30px;
  background: #2498ff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.delete img {
  width: 16px;
}
.main {
  display: flex;
  align-items: center;
}
.main p {
  font-size: 16px;
  font-weight: 600;
  color: #848e97;
}
.main p.done {
  text-decoration: line-through;
  color: #848e97;
}
.main div {
  width: 20px;
  max-width: 20px;
  max-height: 20px;
  height: 20px;
  border: solid 2px #848e97;
  margin-right: 10px;
  border-radius: 5px;
  background: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main div.done {
  background: #848e97;
  border: solid 2px #848e97;
}
.main div img {
  width: 10px;
}
</style>



