# Color Grid!
###### tags: `git` `Creative Code` `p5js`
![](https://i.imgur.com/38jNFMm.gif)


Simple grid filled with one base color, fade its brightness. Using [p5js](https://p5js.org).
view at: http://osadsanu.github.io/colorGrid/
Check the code on `sketch.js` file.

## Modify parameters
If you wish to use that experiment only modify this [line #54](https://github.com/osadsanu/colorGrid/blob/6db56c6c90060f5ffabb9c851a4494148ddf8555/sketch.js#L54):
``` js
    grid.push(new Box(x*size,y*size,size,209,63,random(40,50),random(-1.5,1.5)));
```

The function signature is:
``` js
    Box (x,y,size,H,S,B,vel)
```
Stands for:
- X: x position.
- Y: y position.
- Size: the size of each box.
- H: Hue (remember [HSB colors](http://learn.leighcotnoir.com/artspeak/elements-color/hue-value-saturation/)).
- S: Saturation.
- B: Brightness.
- Vel: the speed of change for each box.