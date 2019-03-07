<template>
    <div class="col-12">
      <div class="d-flex justify-content-end flex-wrap">
        <div class="mr-auto p-2">
          <h2>{{meta.title}}</h2>
        </div>
        <form id="search" class="form-inline p-3">
            <input type="text" class="form-control" placeholder="Поиск" v-model="query">
        </form>
        <div class="p-2 text-center">
            <button type="button" class="btn btn-success mt-2" data-toggle="modal" data-target="#itemEditModal"
                v-on:click="action='add', setCurrent(), header='Добавление нового набора фильтрации'">Добавить</button>
        </div>
      </div>
      <table class="table table-hover table-sm">
        <thead>
          <tr>
            <th scope="col" class="col-th-5 text-center">#id</th>
            <th scope="col" class="col-th-70">Название</th>
            <th scope="col" class="text-center">Опции</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in tableFilter"
            v-bind:key="item.filter_id">
              <th scope="row" class="text-center">{{item.filter_id}}</th>
              <td>{{item.name}}</td>
              <td class="text-right">
                  <button type="button" class="btn btn-success btn-sm mr-1" data-toggle="modal" data-target="#itemEditModal"
                    v-on:click="current_item=item, action='edit', header='Редактирование набора фильтрации', getCurrentItem(item.filter_id)">Редактировать</button>
                  <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#itemDeleteModal" v-on:click="current_item=item">
                        Удалить
                    </button>
              </td>
          </tr>
        </tbody>
      </table>
      <ItemEdit
          v-bind:item = "current_item"
          v-bind:action = "action"
          v-bind:attr_params = "attr_params"
          v-bind:meta = "meta"
          v-bind:header = "header"
          />
      <ItemDelete
         v-bind:item_id="current_item.filter_id"
         v-bind:item_name="current_item.name"
         v-bind:meta="meta"/>
    </div>
</template>


<script>

import ItemEdit from '@/components/ItemEdit.vue'
import ItemDelete from '@/components/ItemDelete.vue'
import { getDataMixin } from '@/mixins/getDataMixin.js'
import { postDataMixin } from '@/mixins/postDataMixin.js'
import { sortDataMixin } from '@/mixins/sortDataMixin.js'
import { searchDataMixin } from '@/mixins/searchDataMixin.js'

export default {
  mixins: [getDataMixin, postDataMixin, sortDataMixin, searchDataMixin],
  name: 'FiltersPage',
  components: {
    ItemEdit,
    ItemDelete,
  },
  props: {
    meta: Object,
 
  },
  data () {
    return {
      items: [],
      current_item: {},
      attr_params: {},
      sort: { desc: true, item: "filter_id"},
      header: '',
      action: "edit",
      query: '',
    }
  },
  computed: {
      //Searching items and rerender component
      tableFilter: function () {
        return this.findBy(this.items, this.query, 'name')
      }
    },
  beforeUpdate(){
    // Sorts data before any update
    this.sortData(this.sort.item, this.sort.desc);
  },
  beforeMount(){
    // Hide inform message
    $('.toast').toast('hide');
    // Get all filters data
    this.getData('filter.lists', this.meta.kind);
    this.getData('filter.params', 'attrparams');
  },
   methods: {
    // Get data about current selected item
    getCurrentItem: function(item_id){
      this.postData('filter.get', {'filter_id': item_id}, 'filter')
    },
    //Set dafault data for adding new item
    setCurrent: function() {
      this.current_item = {"name":"","second_name":"", "attrs":[], "status":true, "deep":1};
    },
  }
}
</script>