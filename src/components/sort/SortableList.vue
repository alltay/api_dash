<template>
    <ul class="list">
        <SortableItem
            v-for="(item, index) in items" :index="index" :key="index" :attr="item"
            v-bind:is_card="is_card"
            v-on:remove="items.splice(index, 1)"/>
    </ul>
</template>

<script>

import { ContainerMixin, ElementMixin } from 'vue-slicksort'
import SortableItem from '@/components/sort/SortableItem.vue'


export default {
  name: 'SortableList',
  components: {
    SortableItem
  },
  mixins: [ContainerMixin],
  props: {
    items: Array,
    is_card: Array,
  },
}
</script>

