<template>
  <div>
      <button :disabled="disabled"  @click="click" > {{btn}} </button>
  </div>
</template>

<script>
export default {
     props: {
        btn: {
             type: [String, Number],
              default(){
                  return 'clicked'
              }
        },
        disabled: {
          type: Boolean,
          default(){
            return false
          }
        }
     },
     methods: {
         click(){
             return this.$emit('click')
         }
     }
}
</script>

<style>

button {
  padding: 7px;
  background: #516BEB;
  border-radius: 4px;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>