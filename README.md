# This is a personal sandbox for webVR experiments

Everything is built with [A-Frame](https://aframe.io).

## 1. [Hello World](1--helloworld.html)
A basic world with random components. Made while learning A-Frame.<br>
**Movement:** `W A S D`

## 2. [UI Test](2--ui.html)
A basic test with cylinder UI.<br>
**Movement:** `W A S D`

## 3. [Figures in Space](3--figures-in-space.html)
Testing a project for IXDS.<br>
**Movement:** `W A S D`

## 4. [ViewPoint](4--viewpoint.html)
The working model for a class project (IXDS public display).<br>
Team Members:<br>
**Movement:** `W A S D`<br>
**God Camera:** `G`<br>
**Toggle Click Interactions:** `C`

## 5. [Missed Connections](5--missed-connections.html)
Prototype for a class project (Programming Usable Interfaces).<br>
Team Members:<br>
**Selection:** `Gaze`<br>
**Movement:** `W A S D`<br>
**Topographic Camera:** `G`<br>
**Force load text, if it doesn't load:** `B`

## 6. [Head Tracked Rotations](6--head-tracked-rotations.html)
For headsets without position tracking (e.g. Google Cardboard), how can we allow position-esque movement? In this experiment, the blocks rotate inversely to the camera's rotation.<br>
**Block Rotation:** `Head Rotation`<br>
**Movement:** `W A S D`<br>
**Force Block Update:** Hold `V` (temporary measure)<br>
**console.log(Camera Attributes):** `C`

## Planned experiments:
- Reading in VR
- Speech input
- 2.5D Twine story with "cutouts"
- Time
- Space, scale

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
