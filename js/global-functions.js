/*
   Keylistener functions
*/
// Setup
//var keyListener = new window.keypress.Listener();

// check targets object
// keyListener.simple_combo('letter', function(){
//    do a thing
// });

/*
   Reload page after so many seconds, used for development
*/
function reloadPage(seconds){

   function reloadCallback(){
      return function(){
         window.location.reload();
      }
   }
   var millis = seconds * 1000;

   setTimeout(reloadCallback(), millis);

}

/*
   Set the parameters of curved image sets using parent settings
*/
function setImagesCurved(parentEl, setBool){

   // find the set of curved elements
   var curvedSet = parentEl.querySelectorAll('a-curvedimage');

   // create a parameters object based on attribute
   var parameters = {
      heightorig:       parentEl.getAttribute('data-heightorig'),
      widthorig:        parentEl.getAttribute('data-widthorig'),
      radius:           parentEl.getAttribute('data-radius'),
      delta:            parentEl.getAttribute('data-delta').split(' '),
      thetaLength:      parentEl.getAttribute('theta-length'),
      thetaStart:       parentEl.getAttribute('theta-start'),
      scale:            parentEl.getAttribute('data-scale')
   }

   // For each element in the curved set, calculate and set its attributes
   for(var i = 0; i < curvedSet.length; i++){

      var el = curvedSet[i];

      // set the radius
      el.setAttribute('radius', parameters.radius);

      // calculate the height to width ratio
      parameters.heightToWidth = parameters.heightorig / parameters.widthorig;
      // The height should be
      // the arc length (the curved width or circumference length)
      //    c = 2 * pi * r
      //    a percentage of c is the arc length
      //    parameters.thetaLength / 360 degrees is that percentage
      // then multiply by the scalar height to width ratio to get the final height
      parameters.height = parameters.heightToWidth * parameters.radius * (2 * Math.PI * (parameters.thetaLength / 360));
      el.setAttribute('height', parameters.height);

      // set the theta-length
      el.setAttribute('theta-length', parameters.thetaLength);

      // if thetaStart isn't set, set the midpoint of the mockup to be the center
      if(parameters.thetaStart == undefined){
         el.setAttribute('theta-start', (360 - parameters.thetaLength) / 2);

      }else{
         el.setAttribute('theta-start', parameters.thetaStart);
      }

      // if the scale isn't set, give it the attribute ... don't think I need this, but it'd be nice to setup something like this for a default value
      // if(el.getAttribute('scale') == null){
      //    el.setAttribute('scale', parameters.scale);
      // }

      var scale = {
         x: Number(parameters.scale) + Number(parameters.delta[i]),
         y: Number(parameters.scale) + Number(parameters.delta[i]),
         z: Number(parameters.scale) + Number(parameters.delta[i])
      }

      el.setAttribute('scale', scale);

   }
}

/*
   Sets the straight/planar images based on a given height and width
*/
function setImagesStraight(){

   var straightImages = scene.querySelectorAll('a-image.js-set');
   forEach(straightImages, function(el){
      var straightWidthOriginal = el.getAttribute('data-width');
      var straightHeightOriginal = el.getAttribute('data-height');
      var straightDesiredHeight = el.getAttribute('height');

      var width = straightDesiredHeight * straightWidthOriginal / straightHeightOriginal;
      console.log(width);
      el.setAttribute('width', width);
   });
}

/*
   Replacement of for() loops over arrays
*/
function forEach(array, action) {
   for (var i = 0; i < array.length; i++)
      action(array[i]);
}
