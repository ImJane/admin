<template>
  <div @click="click">
    <slot name="header"/>
    <slot name="footer"/>
  </div>
</template>
<script>
export default {
  name: 'Login',
  props: {
    value: Boolean
  },
  methods: {
    click () {
      this.$emit('input', true)
    }
  },
  mounted () {
    console.log(this.value)
  }
}
</script>
