export const validateDataMixin = {
    data () {
      return {
        main_url: 'https://api.mirkrestikom.ru/api/',
        user_data: '',
      }
    },
    methods: {
        validate: function (kind){
            this.message = '';
            if(this.item.name.length < 3) { // Check name lenght
                this.message = "Слишком короткое название; <br>";
            }
            try { // Check additional name
              if(this.item.second_name.length < 3 && kind == "attrfilters") {
                  this.message = this.message + "Слишком короткое дополнительное название; <br>";
              }
            } catch(e) {
                this.message = this.message
            }
            try {  // Check attributes list
              if(!this.item.attrs[0]) {
                  this.message = this.message + "Необходимо добавить атрибуты; <br>";
              }
            } catch(e) {
                this.message = this.message
            }
            // Actions with data
            if(this.action === 'add' && !this.message){
                this.add(kind);
                $('#itemEditModal').modal('hide')
            } else if(this.action === 'edit' && !this.message){
                this.update(kind);
                $('#itemEditModal').modal('hide')
            }
        },
        refreshData: function (kind) {
            if (kind == "attribute") {
                this.$parent.getData('attr.lists', kind);
            } else if (kind == "attrLists") {
                this.$parent.getData('attrLists.lists', kind);
            } else if (kind == "attrfilters") {
                this.$parent.getData('filter.lists', kind);
            }
        },
        add: function (kind) {
            if (kind == "attribute") {
                this.postData('attr.add', this.item, kind, 'attr.lists');
            } else if (kind == "attrlists") {
                this.postData('attrLists.add', this.item, kind, 'attrLists.lists');
            } else if (kind == "attrfilters") {
                this.postData('filter.add', this.item, kind, 'filter.lists');
            }
        },
        update: function (kind) {
            if (kind == "attribute" && !this.message) {
                this.postData('attr.update', this.item, kind, 'attr.lists');
            } else if (kind == "attrlists" && !this.message) {
                this.postData('attrLists.update', this.item, kind, 'attrLists.lists');
            } else if (kind == "attrfilters" && !this.message) {
                this.postData('filter.update', this.item, kind, 'filter.lists');
            }
        },
    }
}