var VideoPlayerView = Backbone.View.extend({


  initialize: function() {
  	this.listenTo(this.collection, 'select', this.choose);
  },
  
  choose: function(select) {
    this.model = select;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log(this.model)
    //this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
