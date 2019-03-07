export const searchDataMixin = {
    methods: {
      findBy: function (list, value, column) {
        return list.filter(function (item) {
          return item[column].toLowerCase().includes(value.toLowerCase())
        })
      },
   }
}