<template>
  <div>
    <AddItem @addNew="setNewItem" :items="cItems" @addCI="setNewItem"/>
    <div>
      <item
        v-for="(item,id) in items"
        :key="id"
        :item="item"
        @delete="deleteItem(id)"
        @edit="editItem(id,item)"
      />
    </div>
  </div>
</template>
<script>
import { onValue, ref, set, remove } from "firebase/database";
import { app } from "../firebase/init.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";
import randomId from "random-id";

import Item from "../components/Item.vue";
import AddItem from "../components/AddItem.vue";

const db = getDatabase(app);
const auth = getAuth();

export default {
  data: () => ({
    items: {},
    cItems: {}
  }),
  components: {
    Item,
    AddItem
  },
  mounted() {
    onAuthStateChanged(auth, user => {
      if (user) {
        this.getCItems();
        this.getItems();
      } else {
        this.$router.push("/fridge/login");
      }
    });
  },
  methods: {
    getItems() {
      const query = ref(db, "items");
      onValue(query, snapshot => {
        const data = snapshot.val();

        if (snapshot.exists()) {
          this.items = data;
        } else {
          this.items = {};
        }
      });
    },
    getCItems() {
      const query = ref(db, "cItems");
      onValue(query, snapshot => {
        const data = snapshot.val();
        if (snapshot.exists()) {
          this.cItems = data.filter(
            item => item !== undefined && item !== null
          );
        }
      });
    },
    setNewItem(val) {
      if (val) {
        const query = ref(db, "items/" + randomId(5));
        const obj = {
          name: val,
          done: false
        };
        set(query, obj);
      }
    },
    deleteItem(val) {
      const query = ref(db, "items/" + val);
      remove(query);
    },
    editItem(id, item) {
      const query = ref(db, "items/" + id);
      const obj = {
        name: item.name,
        done: !item.done
      };
      set(query, obj);
    }
  }
};
</script>


