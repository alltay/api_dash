<template>
    <div class="modal fade" id="itemEditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">{{header}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                 <span class="input-group-text" id="inputGroup-sizing-sm">Название*</span>
              </div>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required="" v-model="item.name">
            </div>
            <ItemEditFieldsAtributes
                  v-if="meta.kind === 'attribute'"
                  v-bind:item="item"
                  v-bind:attr_params="attr_params"/>
            <ItemEditFieldsLists v-if="meta.kind === 'attrlists'"
                  v-bind:item="item"
                  v-bind:attr_params="attr_params"/>
            <ItemEditFieldsFilters v-if="meta.kind === 'attrfilters'"
                  v-bind:item="item"
                  v-bind:attr_params="attr_params"/>
            <div class="input-group input-group-sm">
                <div class="input-group-prepend">
                  <span class="input-group-text">Коментарий администратора</span>
                </div>
                <textarea class="form-control" aria-label="" v-model="item.comment">{{item.comment}}</textarea>
              </div>
                   <div class="alert alert-danger mt-1 mb-1" role="alert" v-html="message" v-bind:class="{'d-none': !message}"></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-dismiss="modal" v-on:click="refreshData(meta.kind)">Отмена</button>
                <button type="button" class="btn btn-success" v-if="action == 'add'" v-on:click="validate(meta.kind)">Добавить</button>
                <button type="button" class="btn btn-success" v-if="action == 'edit'" v-on:click="validate(meta.kind)">Сохранить</button>
            </div>
            <!-- {{item}} -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  
import { getDataMixin } from '@/mixins/getDataMixin.js'
import { postDataMixin } from '@/mixins/postDataMixin.js'
import { validateDataMixin } from '@/mixins/validateDataMixin.js'
import ItemEditFieldsAtributes from '@/components/ItemEditFieldsAtributes.vue'
import ItemEditFieldsLists from '@/components/ItemEditFieldsLists.vue'
import ItemEditFieldsFilters from '@/components/ItemEditFieldsFilters.vue'

export default {
  mixins: [getDataMixin, postDataMixin, validateDataMixin],
  name: 'ItemEdit',
  components: {
    ItemEditFieldsAtributes,
    ItemEditFieldsLists,
    ItemEditFieldsFilters,
  },
  props: {
    meta: Object,
    item: Object,
    header: String,
    action: String,
    attr_params: Object,
  },
  data () {
    return {
      items: '',
      message: '',
    }
  },
  methods: {
   }
}
</script>

