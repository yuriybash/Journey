window.AboutUsTemplateBootstrap = Backbone.View.extend({

  el: '#mainContent',

  initialize: function() {
    this.render();
  },

  render: function() {
    return this.$el.append('<div class="aboutUs">' +
      '<div class="container">' +
        '<div class="row no-pad">' + 
        '<h1 class="aboutUs"> Our Team </h1> ' +
          '<div class="col-md-3 profileCol text-center">' +
            '<img class="memberpic" src="assets/yuriy.jpg">' +
            '<p>Yuriy Bash</p>' +
            '<ul>' +
              '<li class="links">' +
                '<a href="https://www.linkedin.com/in/yuriybash">' +
                 '<img class="logo" src="assets/linkedinlogo.png">' +
                '</a>' +
              '<li class="links">' +
                '<a href="https://github.com/yuriybash">' +
                 '<img class="logo" src="assets/githublogo.png">' +
                '</a>' +
              '<li class="links">' +
                '<a href="http://yuriybash.com/">' +
                 '<img class="logo" src="assets/homepageicon.png">' +
                '</a>' +
            '</ul>' +
          '</div>' +
          '<div class="col-md-3 profileCol text-center">' +
            '<img class="memberpic" src="assets/derek.jpg">' +
              '<p>Derek Boero</p>' +
            '<ul>' +
              '<li class="links">' +
                '<a href="https://www.linkedin.com/in/derekboero">' +
                 '<img class="logo" src="assets/linkedinlogo.png">' +
                '</a>' +
              '<li class="links">' +
                '<a href="https://github.com/db222">' +
                 '<img class="logo" src="assets/githublogo.png">' +
                '</a>' +
              '<li class="links">' +
                '<a href="http://derekboero.com">' +
                 '<img class="logo" src="assets/homepageicon.png">' +
                '</a>' +
            '</ul>' +
          '</div>' +
          '<div class="col-md-3 profileCol text-center">' +
            '<img class="memberpic" src="assets/edoe.jpg">' +
              '<p>Edoe Cohen</p>' +
            '<ul>' +
              '<li class="links">' +
                '<a href="https://www.linkedin.com/in/edoecohen">' +
                 '<img class="logo" src="assets/linkedinlogo.png">' +
                '</a>' +
              '<li class="links">' +
                '<a href="https://github.com/edoecohen">' +
                 '<img class="logo" src="assets/githublogo.png">' +
                '</a>' +
              '<li class="links">' +
                '<a href="http://edoecohen.com/">' +
                 '<img class="logo" src="assets/homepageicon.png">' +
                '</a>' +
            '</ul>' +
          '</div>' +
          '<div class="col-md-3 profileCol text-center">' +
            '<img class="memberpic" src="assets/sunshine.jpg">' +
            '<p>Sunshine Yin</p>' +
            '<ul>' +
              '<li class="links">' +
                '<a href="https://www.linkedin.com/in/sunshineyin">' +
                 '<img class="logo" src="assets/linkedinlogo.png">' +
                '</a>' +
              '<li class="links">' +
                '<a href="https://github.com/sunshinewyin">' +
                 '<img class="logo" src="assets/githublogo.png">' +
                '</a>' +
              '<li class="links">' +
                '<a href="http://sunshineyin.com/">' +
                 '<img class="logo" src="assets/homepageicon.png">' +
                '</a>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="row no-pad">' +
          '<div class="col-md-12">' +
            '<h1 class="aboutUs"> Tech Stack </h1>' +
            '<ul class="techStack">' +
              '<li class="backbone">' +
                '<img class="techStackImg" src="assets/backbone.png">' +
              '</li>' +
              '<li class="nodejs">' +
                  '<img class="techStackImg" src="assets/nodejs.png">' +
              '</li>' +
              '<li class="express">' +
                  '<img class="techStackImg" src="assets/express.png">' +
              '</li>' +
              '<li class="MySQL">' +
                  '<img class="techStackImg" src="assets/MySQL.png">' +
              '</li>' +
              '<li class="knex">' +
                  '<img class="techStackImg" src="assets/knex.png">' +
              '</li>' +
              '<li class="bookshelf">' +
                  '<img class="techStackImg" src="assets/bookshelf.png">' +
              '</li>' +
              '<li class="highcharts">' +
                  '<img class="techStackImg" src="assets/highcharts.png">' +
              '</li>' +
              '<li class="d3">' +
                  '<img class="techStackImg" src="assets/d3.png">' +
              '</li>' +
              '<li class="python">' +
                  '<img class="techStackImg" src="assets/python.png">' +
              '</li>' +
              '<li class="gulp">' +
                  '<img class="techStackImg" src="assets/gulp.png">' +
              '</li>' +
              '<li class="gulp">' +
                  '<img class="techStackImg" src="assets/jasmine.svg">' +
              '</li>' +
              '<li class="scrapy">' +
                  '<img class="techStackImg" src="assets/scrapy.png">' +
              '</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
    '</div>' +
  '</div>');
}

});

