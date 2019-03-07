<template>
    <div id="additional-group-fields">
        <div class="input-group input-group-sm mb-3">
           <div class="input-group-prepend">
               <label for="inputGroupSelect01" class="input-group-text input-group-text-short">
                Атрибут
              </label>
           </div>
           <select class="custom-select" v-model="selected_attr">
                <option
                    v-for = "(attr, index) in items" :key = "attr.attr_id"
                    v-bind:value = "attr"
                    v-html="attr.name"></option>
           </select>
               <button type="button" class="btn btn-success btn-sm"
               v-on:click="addToAttrs(item.attrs, selected_attr)"
               v-bind:disabled="!selected_attr">Добавить</button>
           </div>
           <ItemEditAttributesLists
                v-bind:item="item"
                v-bind:is_card="attr_params.is_card"/>
<!--            <div class="input-group input-group-sm mb-3">
             <div class="input-group-prepend">
               <label for="inputGroupSelect01" class="input-group-text input-group-text">
                  Отображать в форме категории
               </label>
              </div>
              <select id="modal-display-select" class="custom-select" v-model="item.display">
                <option is="SelectParamsList"
                        v-for = "(index, key, value) in attr_params.is_card"
                        v-bind:param_name = "index"
                        v-bind:param_id = "key" 
                        v-bind:current_item = "item.display"></option>
              </select>
           </div> -->
        </div>
    </div>
</template>

<script>
  
import { getDataMixin } from '@/mixins/getDataMixin.js'
import { postDataMixin } from '@/mixins/postDataMixin.js'
import SelectParamsList from '@/components/SelectParamsList.vue'
import ItemEditAttributesLists from '@/components/ItemEditAttributesLists.vue'

export default {
  mixins: [getDataMixin, postDataMixin],
  name: 'ItemEditFieldsFilters',
  components: {
    SelectParamsList,
    ItemEditAttributesLists,
  },
  props: {
    item: Object,
    attr_params: Object,
  },
  data () {
    return {
      selected_attr: false,
      attributes: [],
      types: [],
      requireds: [],
      items: [],
      exists: 0
    }
  },
  beforeMount(){
    this.items='';
    this.getData('attr.lists', 'attribute'); //!!!!!! Needs to store type
  },
  methods: {
    addToAttrs: function(arr, selected){
      var exists = 0
      var index;
       for (index = 0; index < arr.length; ++index) {
        if(arr[index].attr_id == selected.attr_id) {
         exists=1
         return this.$parent.message = "Такой атрибут уже есть"
        }
      }
      if (!exists){
        this.item.attrs.push({'attr_id': selected.attr_id, 'name': selected.name, 'is_card': true, 'weight': '1'})
        return this.$parent.message = false
    }
   }
 }
}
</script>
