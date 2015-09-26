var casper = require("casper").create();
casper.start();

casper.wait(100, function() {
    this.viewport(1024, 640);

    yolo("Cover");
});

function yolo(i) {
    if(i == "Cover" || i <= 52) {
        casper.thenOpen('http://localhost:8000/slides.html#'+i+'.0').then(function() {
            if(i == "Cover") i = 1;
            var n = i < 10 ? '0' + i: i;
            casper.wait(200, function() {
            this.capture('screenshots/n'+n+'.png');
            });
            yolo(i + 1);
        });
    }
}

casper.run();
