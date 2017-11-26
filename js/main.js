var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Mike');
    this.imgSrc = ko.observable('img/mike.jpg');
    this.imgAttribution = ko.observable('http://www.kedi.gen.tr/images/yavru-kedi.jpg');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.catTitle = ko.computed(function(){
        return "Meet " + this.name();
    }, this);

    this.catCounter = ko.computed(function(){
        return "Number of clicks: " + this.clickCount();
    }, this);
};

ko.applyBindings(new ViewModel());
