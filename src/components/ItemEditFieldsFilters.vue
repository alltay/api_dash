<template>
    <div id="additional-group-fields">
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Дополнительное название*</span>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required="" v-model.lazy="item.second_name">
        </div>
        <div class="input-group input-group-sm mb-3">
           <div class="input-group-prepend">
               <label for="inputGroupSelect01" class="input-group-text input-group-text-short">
                Атрибут
              </label>
           </div>
           <select class="custom-select" v-model="selected_attr">
                <option
                    v-for = "attr in items" :key = "attr.attr_id"
                    v-bind:value = "attr"
                    v-html="attr.name"></option>
           </select>
               <button type="button" class="btn btn-success btn-sm"
                     v-on:click="addToAttrs(item.attrs, selected_attr)"
                     v-bind:disabled="!selected_attr">Добавить</button>
           </div>
           <ItemEditAttributesFilters
                v-bind:item="item"
                v-bind:types="attr_params.types"
                v-bind:behaviors="attr_params.behaviors"/>
            <div class="input-group input-group-sm mb-3">
               <div class="input-group-prepend">
                 <label for="inputGroupSelect01" class="input-group-text input-group-text">
                    Статус
                 </label>
                </div>
                <select id="modal-display-select" class="custom-select " v-model="item.status">
                   <option is="SelectParamsList"
                                v-for = "(index, key, value) in attr_params.statuses"
                                v-bind:param_name = "index"
                                v-bind:param_id = "Boolean(Number(key))" 
                                v-bind:current_item = "item.status"></option>
                </select>
             </div>
             <div class="input-group input-group-sm mb-3">
               <div class="input-group-prepend">
                 <label for="inputGroupSelect01" class="input-group-text input-group-text">
                    Формирование выдачи
                 </label>
                </div>
                <select id="modal-display-select" class="custom-select" v-model="item.deep">
                   <option is="SelectParamsList"
                                v-for = "(index, key, value) in attr_params.deeps"
                                v-bind:param_name = "index"
                                v-bind:param_id = "key" 
                                v-bind:current_item = "item.deep"></option>
                </select>
             </div>
        </div>
    </div>
</template>

<script>
  
import { getDataMixin } from '@/mixins/getDataMixin.js'
import { postDataMixin } from '@/mixins/postDataMixin.js'
import SelectParamsList from '@/components/SelectParamsList.vue'
import ItemEditAttributesFilters from '@/components/ItemEditAttributesFilters.vue'

export default {
  mixins: [getDataMixin, postDataMixin],
  name: 'ItemEditFieldsFilters',
  components: {
    SelectParamsList,
    ItemEditAttributesFilters,
  },
  props: {
    item: Object,
  },
  data () {
    return {
      attr_params: {   //!!!!!!!!!!!!!!!!!! Needs to get from server
            statuses: {
                     0: "Включен",
                     1: "Выключен",
                     },
            types: {
                     1: "Не отображать",
                     2: "Чекбокс",
                     3: "Слайдер",
                     },
            behaviors: {
                     0: "И",
                     1: "ИЛИ",
                     },
            deeps: {
                     1: "Категория",
                     2: "Категория и подкатегории",
                     3: "По атрибутам",
                    },
                  },
      selected_attr: false,
      attributes: [],
      types: [],
      requireds: [],
      items: [],
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
        this.item.attrs.push({'attr_id': selected.attr_id, 'name': selected.name, 'type': 1, 'behavior': true})
        return this.$parent.message = false
    }
   }
   }
}
</script>

