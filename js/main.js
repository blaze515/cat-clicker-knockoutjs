var initialCats = [
    {
        name: 'Mike',
        imgSrc: 'img/mike.jpg',
        clickCount: 0,
        nicknames: [{nickname: 'Mikey'}, {nickname: 'Michael'}, {nickname: 'Dungeon Master'}]
    },
    {
        name: 'Jane',
        imgSrc: 'img/eleven.jpg',
        clickCount: 0,
        nicknames: [{nickname: 'Eleven'}, {nickname: 'Freak'}]
    },
    {
        name: 'Nancy',
        imgSrc: 'img/nancy.jpg',
        clickCount: 0,
        nicknames: [{nickname: 'Princess Nancy'}]
    },
    {
        name: 'Steve',
        imgSrc: 'img/steve.jpg',
        clickCount: 0,
        nicknames: [{nickname: 'King Steve'}]
    },
    {
        name: 'Jim Hopper',
        imgSrc: 'img/hopper.jpg',
        clickCount: 0,
        nicknames: [{nickname: 'Hopper'}, {nickname: 'Hop'}, {nickname: 'Chief'}]

    },
    {
        name: 'Demagorgan',
        imgSrc: 'img/demagorgan.jpg',
        clickCount: 0,
        nicknames: [{nickname: 'The Monster'}, {nickname: 'The Man with No Face'}]

    }
];

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.changeCat =  function (clickedCat) {
        self.currentCat(clickedCat);
    };
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
