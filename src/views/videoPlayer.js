var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
  	this.listenTo(this.collection, 'select', this.render);
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
