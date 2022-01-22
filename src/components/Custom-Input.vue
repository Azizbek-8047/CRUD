<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="title"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  model: {
    event: "input",
    prop: "value",
  },
  props: {
    placeholder: {
      type: String,
      default() {
        return "Name";
      },
    },
    value: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    type: {
      type: String,
      default(){
        return 'text'
      }
    }
  },
  data() {
    return {
      title: "",
    };
  },
  watch: {
    value(newVAl) {
      this.title = newVAl;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style>
</style>