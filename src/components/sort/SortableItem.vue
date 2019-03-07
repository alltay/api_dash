<template>
	<li class="list-group-item d-flex justify-content-between align-items-center list-item">
	    <span class="wide">
	      {{attr.name}}
	    </span>
	    <span class="badge badge-primary badge-pill mr-1">
	      Вес:{{attr.weight}}
	    </span>
	    <select class="custom-select select-small mr-1" v-model="attr.is_card">
	        <option is="SelectParamsList"
	                v-for = "(index, key, value) in is_card"
	                v-bind:param_name = "'В карточке ' +index"
	                v-bind:param_id = "Boolean(Number(key))" 
	                v-bind:current_item = "attr.display"></option>
	    </select>
	    <button type="button" class="btn btn-danger btn-sm" v-on:click="$emit('remove')">Удалить</button>
	</li>
</template>

<script>

import SelectParamsList from '@/components/SelectParamsList.vue'
import { ContainerMixin, ElementMixin } from 'vue-slicksort'

export default {
  name: 'SortableItem',
  components: {
  	SelectParamsList,
  },
  mixins: [ElementMixin],
    props: ['attr', 'is_card'],
}
</script>

