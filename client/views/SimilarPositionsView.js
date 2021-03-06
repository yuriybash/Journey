var SimilarPositionsView = Backbone.View.extend({
	
	tagName: "ul",
	className:"similarPositions",

	initialize: function(){
		this.render();
	},

	render: function(){

		var previousPositions = [];
		var positions = this.model.get('similarPositions');

		for(var key in positions) {
			previousPositions.push([positions[key], key]);
		}

		console.log('previousPositions before splice', previousPositions);
		previousPositions = previousPositions.splice(0,5);
		console.log('previousPositions after', previousPositions);

		if(previousPositions.length > 0){ 
      $('#similarpositions-div').append('<div class="rightColHeading">Similar Positions</div>');
    }

		return this.$el.append(previousPositions.map(function(position){
			return ('<li class=similarposition><a href="#journey/' + position[1] + '"> ' +  position[0] + '</a> </li>');
		}));

	}

});