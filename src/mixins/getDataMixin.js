export const getDataMixin = {
    data () {
      return {
        main_url: 'https://api.mirkrestikom.ru/api/',
        user_data: '',
      }
    },
    methods: {
      getData: function (path, element) {
          this.$parent.loading = true;
          fetch(this.main_url + path + this.user_data)
          .then((response) => {
              if(response.ok) {
                  return response.json();
              }
              alert("Ошибка соеинения с сервером")
              throw new Error('Network response was not ok');
          })
          .then((json) => {
              if(element === 'attrparams'){
                   this.attr_params = json;
              } else if (element === 'attribute' || 'attrlists' || 'attrfilters'){
                   this.items = json['items'];
              }
              this.$parent.loading = false;
              this.$parent.answer = this.answer;
          })
          .catch((error) => {
              console.log(error);
          });
      },
   }
}