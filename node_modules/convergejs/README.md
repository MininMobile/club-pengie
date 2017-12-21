# Install
### Install Latest Verison
```
npm i convergejs --save
```
### Install Older Version
```
npm i convergejs@1.0.0 --save
```

# What

Convergejs is a tool for working with graphics on html5 websites. It is simular to [p5*][1] except instead of having a JS canvas as the user interface, it has a regular HTML element acting as a canvas where elements can me manipulated at will - also it requires node.

# Usage

```html
<html>
<head>
    <script>const cvg = require("convergejs");</script>
</head>

<body>
    <div id="canvas"> </div>

    <script>
    var canvas = document.getElementById("canvas");
    var c = new cvg.Canvas(canvas, "600px", "450px", 24);

    c.style([["background", "gray"]]);
    var box = c.new("box", "element");
    box.style([["background", "blue"]])
    var i = 0;

    c.on("loop", () => {
        i += 0.5;
        box.move({x:(Math.cos(i)*50)+50 + "px"})
    });

    box.on("moved", () => {
        if (i % 2 == 0) {
            box.style([["background", "white"]])
        } else {
            box.style([["background", "black"]])
        }
    });
    // And More!
    </script>
</body>
</html>
```

# Event Reference
## Canvas Events
### loop
Executed every frame, specify fps as the 4th parameter of the Canvas's constructor. Gives no parameters.
### styled
Executed every time `canvas.style(...)` is used. Gives the parameters that you entered.
### newElem
Executed every time a new element is created. Gives the parameter of what it returns.
## Element Events
### styled
Executed every time `elem.style(...)` is used. Gives the parameters that you entered.
### moved
Executed every time `elem.move(...)` is used. Gives the parameters that you entered.
### resized
Executed every time `elem.size(...)` is used. Gives the parameters that you entered.
### edited
Executed every time `elem.content(...)` is used. Gives the parameters that you entered.

[1]: https://p5js.org/