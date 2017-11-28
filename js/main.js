var ViewModel = function() {
    var self = this;

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.currentCat = ko.observable(new Cat({
        clickCount: 0,
        name: 'Mike',
        imgSrc: 'img/mike.jpg',
        imgAttribution: 'http://www.kedi.gen.tr/images/yavru-kedi.jpg',
        nicknames: [{nickname: 'Mikey'}, {nickname: 'Michael'}, {nickname: 'Dungeon Master'}]
    }));
};

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);
    this.catTitle = ko.computed(function(){
        return "Meet " + this.name();
    }, this);

    this.catCounter = ko.computed(function(){
        return "Number of clicks: " + this.clickCount();
    }, this);
};

ko.applyBindings(new ViewModel());
