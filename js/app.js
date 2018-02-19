var initialCats = [
  { clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: ['Tabby', 'Tabbo', 'Tabitha Tabby Tabberoosky III, esq.', 'Merv'] },
  { clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
    nicknames: ['Tigger'] },
  { clickCount: 0,
    name: 'Scaredy',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
    nicknames: ['Casper'] },
  { clickCount: 0,
    name: 'Shadow',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
    nicknames: ['Shooby'] },
  { clickCount: 0,
    name: 'Sleepy',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
    nicknames: ['Zzzzz'] },
];

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

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.setCurrentCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };
}

ko.applyBindings(new ViewModel());
