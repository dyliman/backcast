var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
  	this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.$el.append(
      this.collection.map(function(video) {
        return new VideoListEntryView( {model: video} ).render();
      })
    );


    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
