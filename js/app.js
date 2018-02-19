var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.level = ko.observable('Infant');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');

    this.nicknames = ko.observableArray(
      [ { nickname: "Tabby" },
        { nickname: "Tabbo" },
        { nickname: "Tabitha Tabby Tabberoosky III, esq."},
        { nickname: "Merv" } ]
    );

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);

        if (this.clickCount() >= 50) {
          this.level('Cattus Maximus');
        }
        else if (this.clickCount() >= 30) {
          this.level('Cat');
        }
        else if (this.clickCount() >= 20) {
          this.level('Teen');
        }
        else if (this.clickCount() >= 10) {
          this.level('Kitty');
        }
        else {
          this.level('Infant');
        }
    };
}

ko.applyBindings(new ViewModel());
