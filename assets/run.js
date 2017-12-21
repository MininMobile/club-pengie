const cvg = require("convergejs");
const canvas = document.getElementById("canvas");
const c = new cvg.Canvas(canvas, "600px", "450px", 30);

c.style([["background", "url('home.png')"]]);
const p = c.new("box", "player");

p.size({ height:"100px", width:"65px" });
p.style([["background", "url('pengoi.png')"], ["background-size", "contain"], ["transition", "all 1s"]]);
p.move({ y:"200px" });

document.onmousedown = (event) => {
    if ((event.x < c.getSize().x-p.getSize().x/2)
        && (event.x > p.getSize().x/2)
        && (event.y < 385)
        && (event.y > 225)) {
        p.move({
            x:(event.x)-p.getSize().x/2 + "px",
            y:(event.y)-p.getSize().y + "px"
        });
    }
}