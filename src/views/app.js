var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
  	this.$el.empty();
  	this.$el.html(this.template());

    new SearchView({collection: this.videos}).render();
    new VideoPlayerView({collection: this.videos}).render();
    new VideoListView({collection: this.videos}).render();
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
