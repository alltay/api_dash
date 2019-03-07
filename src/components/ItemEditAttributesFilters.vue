<template>
      <ul class="list-group mb-3" >
        <li class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(attr, index) in item.attrs" :key="item.attr_id"
            v-bind:attr="attr">
            <span class="wide">
              {{attr.name}}
            </span>
            <select class="custom-select select-small" v-model="attr.type">
                <option is="SelectParamsList"
                        v-for = "(index, key) in types"
                        v-bind:param_name = "index"
                        v-bind:param_id = "key" 
                        v-bind:current_item = "attr.type"></option>
            </select>
            <select class="custom-select select-small">
                <option is="SelectParamsList"
                        v-for = "(index, key) in behaviors"
                        v-bind:param_name = "index"
                        v-bind:param_id = "Boolean(key)" 
                        v-bind:current_item = "attr.behavior"></option>
            </select>
            <button type="button" class="btn btn-danger btn-sm" @click="item.attrs.splice(index, 1)">Удалить</button>
        </li>
      </ul>
</template>

<script>
  
import SelectParamsList from '@/components/SelectParamsList.vue'

export default {
  name: 'ItemEditAttributesFilters',
  components: {
    SelectParamsList,
  },
  props: {
    item: Object,
    behaviors: Object,
    types: Object,
  }
}
</script>
