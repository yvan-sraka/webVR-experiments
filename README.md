# This is a personal sandbox for webVR experiments

Everything is built with [A-Frame](https://aframe.io). Order is chronological. Keyboard shortcuts are largely for development or demonstration purposes. To read design documentation and my process for experiments six and later, see my Medium collection [Humane Virtuality](https://medium.com/humane-virtuality).

Comments, suggestions, and pull requests welcome.

![Humane Virtuality Logo](https://raw.githubusercontent.com/armthethinker/webVR-experiments/master/assets/img/heroes/hv-icon.png "Humane Virtuality Logo")

## Experiments


### 1. [Hello World](1--helloworld.html)
![Image for experiment 1](https://raw.githubusercontent.com/armthethinker/webVR-experiments/master/assets/img/heroes/hero-1.jpg)

A basic world with random components. Made while learning A-Frame.

**Guiding Question:** How do I use A-Frame?

| Action | Key |
| ------ | :-: |
|Movement| `W A S D` |



### 2. [UI Test](2--ui.html)
![Image for experiment 2](https://raw.githubusercontent.com/armthethinker/webVR-experiments/master/assets/img/heroes/hero-2.jpg)

A basic test with cylinder UI.

**Guiding Question:** How easy is it to create a UI with a single cylinder?

| Action | Key |
| ------ | :-: |
|Movement| `W A S D` |



### 3. [Figures in Space](3--figures-in-space.html)
![Image for experiment 3](https://raw.githubusercontent.com/armthethinker/webVR-experiments/master/assets/img/heroes/hero-3.jpg)

Testing a project for IXDS.

**Guiding Question:** Is it realistic to use A-Frame in the short timeframe of a class project?

| Action | Key |
| ------ | :-: |
|Movement| `W A S D` |



### 4. [ViewPoint](4--viewpoint.html)
![Image for experiment 4](https://raw.githubusercontent.com/armthethinker/webVR-experiments/master/assets/img/heroes/hero-4.jpg)

The working model for a class project (IXDS public display).

**Guiding Question:** Can A-Frame be used to present designs for an installation piece in a museum?

Team Members: Iris Wu, Tiffany Wang, Ryan Huber

| Action | Key |
| ------ | :-: |
|Movement| `W A S D` |
|God Camera| `G` |
|Toggle Click Interactions| `C` |



### 5. [Missed Connections](5--missed-connections.html)
![Image for experiment 5](https://raw.githubusercontent.com/armthethinker/webVR-experiments/master/assets/img/heroes/hero-5.jpg)

Prototype and final presentation for a class project (Programming Usable Interfaces).

**Guiding Question:** Given (another) short timeframe, can we build more with in A-Frame than with Swift?

Team Members: Andrew Novotny, Joel Rodrigues, & Rachel Ng

| Action | Key |
| ------ | :-: |
|Selection | `Gaze` |
|Movement | `W A S D` |
|Topographic Camera | `G` |
|Force load text, if it doesn't load | `B` |



### 6. [Head Tracked Transformations](6--head-tracked-transformations.html)
![Image for experiment 6](https://raw.githubusercontent.com/armthethinker/webVR-experiments/master/assets/img/heroes/hero-6.jpg)

For headsets without positional tracking (e.g. Google Cardboard), how can we allow position-esque movement? In this set of experiments, the blocks mutate based on the selected transformation.

**Guiding Question:** Can head rotations be tied to an object to allow position-esque movements?

| Action | Key |
| ------ | :-: |
|  Movement    |   `W A S D`  |
|  Toggle target to be locked to camera or to world    |   `T`  |
|  Toggle building    |   `B`  |
|  Toggle pillars    |   `P`  |
|  console.log(Camera Attributes, activeTarget Attributes)    |   `C`|

| Transformation | Key |
| -------------- |:------:|
| Rotate target with human camera rotation | `1` |
| Rotate target with human camera rotation<br><small>Includes reasonable magic numbers: 4x of horizontal rotation, 3x of vertical rotation</small> | `2` |
| <small>**Default**</small><br>Rotate target inversely with human camera rotation<br><small>Includes reasonable magic numbers: -4x of horizontal rotation, -3x of vertical rotation</small> | `3` |
| Move target in x-axis based on z-position of human camera | `4` |
| Rotate target in x-axis based on z-position of human camera | `5` |



### 7. [Product Selection & Customization](7--product-selection-customization.html)
![Image for experiment 7](https://raw.githubusercontent.com/armthethinker/webVR-experiments/master/assets/img/heroes/hero-7.jpg)

Looking at the differences in prototyping with a single planar mockup, a curved mockup, and a three dimensional mockup.

**Guiding Question:** What can be learned by taking a design from the web and translating it into VR?

| Action | Key |
| ------ | :-: |
|  Movement    |   `W A S D`  |
|  console.log(Targets)    |   `C`  |

| Mockup Selection | Key |
| ---------------- |:---:|
| Planar mockup    | `1` |
| Curved mockup    | `2` |
| 3D mockups       | `3` |



### 8. [Video Controls](8--video-controls.html) - Work in Progress
![Image for experiment 8](https://raw.githubusercontent.com/armthethinker/webVR-experiments/master/assets/img/heroes/hero-8.jpg)

Well-designed video controls for spherical videos. Inspired by [@oscarmarinmiro](https://github.com/oscarmarinmiro/aframe-video-controls).

**Guiding Question:** How do controls for videos change when the content is all around you?

| Action | Key |
| ------ | :-: |
|Selection| `Gaze` or `Click` |



### 9. [Solar System](9--solar-system.html)
![Image for experiment 9](https://raw.githubusercontent.com/armthethinker/webVR-experiments/master/assets/img/heroes/hero-9.jpg)

After hearing a podcast on [SpaceVR](http://www.spacevr.co/), I was inspired to create an experience based on their project. However, for this prototype, I decided I was building in the wrong direction. So, I wrapped it up and started work on experiment 10.

**Guiding Question:** What does it feel like to see earth from a satellite point-of-view?

| Action | Key |
| ------ | :-: |
|Selection| `Gaze` or `Click` |



### 10. [SpaceVR Simulator](10--spacevr-simulator.html)
![Image for experiment 10](https://raw.githubusercontent.com/armthethinker/webVR-experiments/master/assets/img/heroes/hero-10.jpg)

This is my second attempt to build a [SpaceVR](http://www.spacevr.co/) simulator. This time, I had a clearer project in-mind: less robust, more to the point. This time it took me less than two hours to throw it all together.

**Guiding Question:** What does it feel like to see earth from a satellite point-of-view?

| Action | Key |
| ------ | :-: |
|Selection| `Gaze` or `Click` |



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
