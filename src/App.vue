<template>
  <div class="main">
    <div class="items">
      <ul>
        <li class="nav-nav">
          <span>id</span>
          <span>title</span>
          <span>username</span>
          <span>email</span>
          <span>phone</span>
        </li>
        <li class="nav-nav search">
          <span>
            <custom-input v-model="search" :placeholder="'Search by Name'"
          /></span>
        </li>
        <li v-for="el in list" :key="el.id">
          <span>{{ el.id }}</span>
          <span>{{ el.title }}</span>
          <span>{{ el.username }}</span>
          <span>{{ el.email }}</span>
          <span>{{ el.phone }}</span>
        </li>
      </ul>
    </div>
    <div class="nav">
      <custom-button
        v-for="btn in pages"
        :key="btn"
        :btn="btn"
        @click="paginate(btn)"
      />
    </div>
  </div>
</template>

<script>
import CustomButton from "./components/Custom-Button.vue";
import CustomInput from "./components/Custom-Input.vue";
export default {
  components: {
    "custom-input": CustomInput,
    "custom-button": CustomButton,
  },
  data() {
    return {
      page: 1,
      limit: 10,
      search: "",
    };
  },
  methods: {
    paginate(arg) {
      this.page = arg;
    },
  },
  computed: {
    list() {
      return this.$store.getters.getResult.slice(
        this.offset,
        this.offset + this.limit
      );
    },
    searchList() {
      return this.search
        ? this.list.filter((el) =>
            el.title
              .toLocaleLowerCase()
              .includes(this.search.toLocaleLowerCase())
          )
        : this.limit;
    },
    offset() {
      return (this.page - 1) * this.limit;
    },
    pages() {
      return Math.ceil(this.$store.getters.getCount / this.limit);
    },
  },
  watch: {
    search(newVal) {
      this.$store.commit("filter", newVal);
    },
  },
  mounted() {
    this.$store.commit("filter", "");
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
  height: 100%;
  margin: 0;
  padding: 0;
}

ul li {
  display: flex;
  align-items: center;
  padding: 8px;
  background: #a3e4db;
  margin: 8px 0;
  border-radius: 8px;
}

ul li span {
  width: calc(100% / 5);
  display: flex;
  justify-content: center;
}

.nav-nav {
  background: #fed1ef;
}

.search {
  background: #ffcbcb;
}

.search input {
  border-radius: 6px;
  border: none;
  outline: none;
}

.nav-nav span {
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
}

a {
  text-decoration: none;
}

.main {
  background: #fff8f3;
  width: 90%;
  height: 90vh;
  padding: 5vh 5%;
}

.nav {
  display: flex;
  align-items: center;
}

.nav button {
  margin-right: 5px;
}

input {
  padding: 6px;
  outline: none;
}

.items {
  width: 100%;
  height: 500px;
  margin: 25px 0;
}
</style>