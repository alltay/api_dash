<template>
    <div class="modal fade" id="itemDeleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Удаление элемента</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Вы действительно хотите удалить "{{item_name}}"?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal">Отмена</button>
            <button type="button" class="btn btn-danger"  data-dismiss="modal" v-on:click="deleteItem(item_id)">Удалить</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  
import { getDataMixin } from '@/mixins/getDataMixin.js'
import { postDataMixin } from '@/mixins/postDataMixin.js'

export default {
  mixins: [getDataMixin, postDataMixin],
  name: 'ItemDelete',
  props: {
    meta: Object,
    item_id: Number,
    item_name: String,
  },
  data () {
    return {
    }
  },
  methods: {
      deleteItem: function (item_id) {
         if( this.meta.kind == "attribute" ) {
            this.postData('attr.delete', {'attr_id': item_id}, this.meta.kind, 'attr.lists');
         } else if ( this.meta.kind == "attrlists" ) {
            this.postData('attrLists.delete', {'attrlist_id': item_id}, this.meta.kind, 'attrLists.lists');
         } else if ( this.meta.kind == "attrfilters" ) {
            this.postData('filter.delete', {'filter_id': item_id}, this.meta.kind, 'filter.lists');
         }
      },
   }
}
</script>

