<template>
<option v-bind:value="param_id" v-if = "param_id == current_item" selected>{{param_name}}</option>
<option v-bind:value="param_id" v-else>{{param_name}}</option>
</template>

<script>
  

export default {
  name: 'SelectParamsList',
  props: [
    'param_name',
    'param_id',
    'current_item',
  ],
}
</script>

