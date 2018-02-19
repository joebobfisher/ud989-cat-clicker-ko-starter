var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');

  this.nicknames = ko.observableArray(
    [ { nickname: "Tabby" },
      { nickname: "Tabbo" },
      { nickname: "Tabitha Tabby Tabberoosky III, esq."},
      { nickname: "Merv" } ]
  );

  this.level = ko.computed(function() {
    var level;
    var clicks = this.clickCount();
    if (this.clickCount() >= 50) {
      level = 'Cattus Maximus';
    }
    else if (this.clickCount() >= 30) {
      level = 'Cat';
    }
    else if (this.clickCount() >= 20) {
      level = 'Teen';
    }
    else if (this.clickCount() >= 10) {
      level = 'Kitty';
    }
    else {
      level = 'Infant';
    }
    return level;
  }, this);
}

var ViewModel = function() {

  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
