var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

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
  // "self" is referring to the ViewModel -- otherwise "this" changes within
  // incrementCounter() because it is within a "with" binding.
  var self = this;

  this.currentCat = ko.observable(new Cat({
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/big',
    nicknames: ['Tabby', 'Tabbo', 'Tabitha Tabby Tabberoosky III, esq.', 'Merv']
  }));

  this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
