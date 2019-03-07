export const sortDataMixin = {
    methods: {
      sortData: function(item, desc) {
          function compare(a, b) {
            if(desc == true) {
              if (a[item] < b[item])
                return 1;
              if (a[item] > b[item])
                return -1;
              return 0;
            } else {
              if (a[item] < b[item])
                return -1;
              if (a[item] > b[item])
                return 1;
              return 0;
            }
          }
        return this.items.sort(compare);
      },
   }
}