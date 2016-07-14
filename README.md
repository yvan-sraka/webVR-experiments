# This is a personal sandbox for webVR experiments

Everything is built with [A-Frame](https://aframe.io). Order is chronological.

## 1. [Hello World](1--helloworld.html)
A basic world with random components. Made while learning A-Frame.

**Movement:** `W A S D`

## 2. [UI Test](2--ui.html)
A basic test with cylinder UI.

**Movement:** `W A S D`

## 3. [Figures in Space](3--figures-in-space.html)
Testing a project for IXDS.

**Movement:** `W A S D`

## 4. [ViewPoint](4--viewpoint.html)
The working model for a class project (IXDS public display).

Team Members: Iris Wu, Tiffany Wang, Ryan Huber

**Movement:** `W A S D`<br>
**God Camera:** `G`<br>
**Toggle Click Interactions:** `C`

## 5. [Missed Connections](5--missed-connections.html)
Prototype for a class project (Programming Usable Interfaces).

Team Members: Andrew Novotny, Joel Rodrigues, & Rachel Ng

**Selection:** `Gaze`<br>
**Movement:** `W A S D`<br>
**Topographic Camera:** `G`<br>
**Force load text, if it doesn't load:** `B`

## 6. [Head Tracked Transformations](6--head-tracked-transformations.html)
For headsets without positional tracking (e.g. Google Cardboard), how can we allow position-esque movement? In this set of experiments, the blocks mutate based on the selected transformation.

**Movement:** `W A S D`<br>
**Toggle target to be locked to camera or to world:** `T`<br>
**Toggle building:** `B`<br>
**Toggle pillars:** `P`<br>
**console.log(Camera Attributes, activeTarget Attributes):** `C`

| Transformation | Key |
| ------------- |:------:|
| Rotate target with human camera rotation | `1` |
| Rotate target with human camera rotation<br><small>Includes reasonable magic numbers: 4x of horizontal rotation, 3x of vertical rotation</small> | `2` |
| <small>**Default**</small><br>Rotate target inversely with human camera rotation<br><small>Includes reasonable magic numbers: -4x of horizontal rotation, -3x of vertical rotation</small> | `3` |
| Move target in x-axis based on z-position of human camera | `4` |
| Rotate target in x-axis based on z-position of human camera | `5` |

## 7. [Product Selection & Customization](7--product-selection-customization.html)
Looking at the differences in prototyping with a single planar mockup, a curved mockup, and a three dimensional mockup.

**Movement:** `W A S D`<br>
**console.log(Targets):** `C`

| Mockup Selection | Key |
| ---------------- |:---:|
| Planar mockup    | `1` |
| Curved mockup    | `2` |
| 3D mockups       | `3` |

## 8. [Video Controls](8--video-controls.html) - Work in Progress
Well designed video controls for spherical videos. Inspired by [@oscarmarinmiro](https://github.com/oscarmarinmiro/aframe-video-controls).

**Selection:** `Gaze` or `Click`<br>

## 9. [Solar System](9--solar-system.html)
After hearing a podcast on SpaceVR, I was inspired to create an experience based on their project. However, for this prototype, I decided I was building in the wrong direction. So I wrapped it up and started work on experiment 10.

**Selection:** `Gaze` or `Click`<br>

**Selection:** `Gaze` or `Click`<br>

## Planned experiments & other documentation:
See my Medium collection, [Humane Virtuality](https://medium.com/humane-virtuality).

## Setup
```
1. $ npm install
2. $ bower update
3. $ grunt
```
Grunt uses [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei).

To deploy,
```
$ npm run deploy
```

Personal site: [andrewrmchugh.rocks](http://andrewrmchugh.rocks).
