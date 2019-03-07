<template>
    <div id="additional-attribute-fields">
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Тип</label>
        </div>
        <select class="custom-select" v-model="item.type">
            <option is="SelectParamsList"
                    v-for = "(index, key, value) in attr_params.types"
                    v-bind:param_name = "index"
                    v-bind:param_id = "key" 
                    v-bind:current_item = "item.type"></option>
        </select>
      </div>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Единица измерения</label>
        </div>
        <select class="custom-select" v-model="item.unit_id">
            <option is="SelectParamsList"
                    v-for = "(index, key, value) in attr_params.units"
                    v-bind:param_name = "index"
                    v-bind:param_id = "key"
                    v-bind:current_item = "item.unit_id"></option>
        </select>
      </div>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Обязательный</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01" v-model="item.required">
            <option is="SelectParamsList"
                    v-for = "(index, key, value) in attr_params.requireds"
                    v-bind:param_name = "index"
                    v-bind:param_id = "Boolean(Number(key))" 
                    v-bind:current_item = "item.required"></option>
        </select>
      </div>
    </div>
</template>

<script>
  
import { getDataMixin } from '@/mixins/getDataMixin.js'
import { postDataMixin } from '@/mixins/postDataMixin.js'
import SelectParamsList from '@/components/SelectParamsList.vue'

export default {
  mixins: [getDataMixin, postDataMixin],
  name: 'ItemEditFieldsAtributes',
  components: {
    SelectParamsList,
  },
  props: {
    item: Object,
    attr_params: Object,
  },
  data () {
    return {
      attributes: [],
      types: [],
      requireds: [],
    }
  },
  methods: {
   }
}
</script>

