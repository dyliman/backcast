var SearchView = Backbone.View.extend({

  events : {
    'click button': 'handleSearch',
    'keyup input': 'handleEnter'
  },
  
  handleEnter: function(event){
    if(event.keyCode === 13){
      this.handleSearch();
    }
  },
  
  handleSearch: function(){
    this.collection.search(this.$('input').val());
    this.$('input').val('')
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
