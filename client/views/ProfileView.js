/**
 * extends a backbone view constructor to create
 * a view for displaying a profile's information
 * @constructor
 * @param {object} model - ProfileModel holds the information representing the profile
 *                           of whom was selected
 */
var ProfileView = Backbone.View.extend({

  el: '#mainContent',
  model: ProfileModel,

  initialize: function() {
    var timeline_Items = [];
    //grab reference to degrees array
    var degrees = this.model.get('degrees');
    //iterate over degrees creating timeline item models
    for(var i = 0; i < degrees.length; ++i) {
      //use method to massage data into timeline item model
      timeline_Items.push( degreeToTimelineItemModel( degrees[i] ) );
    }

    var currentYear = new Date().getFullYear();

    var currentPosition = {
      type: 'Experience',
      dates: {
        start: this.model.get('currentStart'),
        end: currentYear
      },
      image: './assets/briefcase.png',
      text: {
        '1': this.model.get('currentPosition'),
        '2': this.model.get('currentCompany'),
      }
    };

    timeline_Items.push(currentPosition);

    var experiences = this.model.get('experiences');
    //iterate over experience creating timeline item models
    for(var j = 0; j < experiences.length; ++j) {
      //use method to massage data into timeline item model
      timeline_Items.push( experienceToTimelineItemModel(experiences[j]) );
    }

    timeline_Items.sort(function(a,b) {
      if(b.dates.start === a.dates.start && b.dates.end !== a.dates.end){
        return b.dates.end - a.dates.end;
      }
      return b.dates.start - a.dates.start;
    });
    //create the TimelineModel to give to the TimelineView in render
    this.timelineModel = new TimelineModel({collection : timeline_Items} );
    this.render();
  },

  events: {
    'click .backButton': 'goBack'
  },

  goBack: function() {
    window.history.back();
  },

  /*
   * render - renders element to the dom displaying the profiles information
   */
  render: function() {
    //clear #mainContent of previous rendered elements
    this.$el.children().detach();
    //create our navigation bar
    new NavBarView();
    new AutocompleteView ({model: app});


    $('#mainContent').append('<div class="container profileContainer"></div>');
    var $outerContainer = $('.profileContainer');

    $outerContainer.append('<div class="row"></div>');
    var $mainRow =  $('.row');

    $mainRow.append('<div class="col-md-8 leftCol">');
    $mainRow.append('<div class="col-md-4 rightCol">');
    var $leftCol = $('.leftCol');
    var $rightCol = $('.rightCol');

    $leftCol.append('<div id="profile-card"></div>');
    // $leftCol.append('<div class="backButton">Back</div>');
    new ProfileCardView( { model : this.model } );

    //create div for the the timeline to render to
    $leftCol.append('<div id="timeline-div"></div>');
    //create timeline view, which will render to an element with id = timeline-div
    new TimelineView( { model : this.timelineModel } );


    $rightCol.append('<div id="similarpositions-div"></div>');

    var similarPositionsModel = new SimilarPositionsModel(this.model.get('industryID'));
    this.listenTo(similarPositionsModel, 'similarPositionsReceived', function() {
      var similarPositionsView  = new SimilarPositionsView({model: similarPositionsModel});
      this.$el.find("#similarpositions-div").append(similarPositionsView.el);
    });


    $rightCol.append('<div id="similarprofiles-div"><div class="rightColHeading">Similar Profiles</div></div>');


    var context = this;
    var newSimilarPeopleModel = new SimilarPeopleModel(this.model.get('industry'));

    this.listenTo(newSimilarPeopleModel, 'similarPeopleReceived', function() {

      var people = newSimilarPeopleModel.get('similarPeople');

      people.forEach(function(person){
        if(person.picURL === null){
            person.picURL = 'http://bridgesprep.org/wp-content/uploads/2013/10/Facebook-no-profile-picture-icon-620x389.jpg';
        }

        var similarPeopleThumbnailCollection      = new ThumbnailsCollection(people);
        var similarPeopleThumbnailsCollectionView = new ThumbnailsCollectionView({collection: similarPeopleThumbnailCollection});
        $rightCol.append(similarPeopleThumbnailsCollectionView.el);
      });
    });
  }
});

/*
 * degreeToTimelineItemModel - massages the data given into
 *                    the format a TimelineModel should be
 * @param {object} eduMilestone - contains time and label information related to education
 */
var degreeToTimelineItemModel = function(eduMilestone) {
    var obj = {};
    obj.type = 'Education';
    obj.dates = {
        start: Number(eduMilestone.start),
        end: Number(eduMilestone.end)
    };
    obj.text = {
        '1': eduMilestone.degree + ' in ' + eduMilestone.fos,
        '2': eduMilestone.school
    };

    obj.image = './assets/education-icon.png';

    return obj;
};

/*
 * experienceToTimelineItemModel - massages the data given into
 *                    the format a TimelineModel should be
 * @param {object} eduMilestone - contains time and label information related to experience
 */
var experienceToTimelineItemModel = function(expMilestone) {
    var obj = {};
    obj.type = 'Experience';
    obj.dates = {
        start: Number(expMilestone.start),
        end: Number(expMilestone.end)
    };
    obj.text = {
        '1': expMilestone.position,
        '2': expMilestone.company
    };

    obj.image = './assets/briefcase.png';

    return obj;
};
