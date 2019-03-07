export const postDataMixin = {
    methods: {
      postData: function (path, data, element, method) {
          this.$parent.loading = true;
          fetch(this.main_url + path + this.user_data, {
            method: 'post',
            headers: {
                  "Content-Type": "application/json"
                },
            body: JSON.stringify(data),
            })
          .then((response) => {
              if(response.ok) {
                  return response.json();
              }
              alert("Ошибка соеинения с сервером")
              throw new Error('Network response was not ok');
              
          })
          .then((json) => {
              //Show operation status    
              if(json['error']){
                  this.$parent.answer = json['error'] + " "+ json['description'];
              } else {
                  this.$parent.answer = "Оперция прошла успешно";
              }
              // if updating single element
              if(element === 'attr' || 'list' || 'filter'){
                  this.current_item = json;
              }
              // If get method is passed
              if(method){
                $('.toast').toast('show');
                //Refresh page data
                this.$parent.getData(method, element);
              } 
              this.$parent.loading = false;
          })
          .catch((error) => {
              console.log(error);
          });
      },
   }
}