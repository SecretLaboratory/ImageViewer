ImageViewer [JQuery Plugin]
===========

ImageViewer is a jQuery plugin that converts an unordered list into a slideshow type of display for images

It works by parsing out a set of &lt;li&gt; elements, then rendering them as single images to a target container
	
## Usage
ImageViewer will display a set of images defined within an unordered list one at a time, rendered into a container that you specify.
ImageViewer also provides methods for you to navigate to next / previous images as well as jump to a specified index.

###Initializing the plugin:
Here's a basic example of how to set up our images with a simple html unordered list

```html
	<!-- this is the list of images -->
	<ul class="imagelist" id="bonggg">
		<li>
			<img src="assets/image1.jpg" alt="Image 1">
			<div class="caption">Image Caption 1</div>
		</li>
		<li>
			<img src="assets/image2.jpg" alt="Image 2">
			<div class="caption">Image Caption 2</div>
		</li>
		<li>
			<img src="assets/image3.jpg" alt="Image 3">
			<div class="caption">Image Caption 3</div>
		</li>
		<li>
			<img src="assets/image4.jpg" alt="Image 4">
			<div class="caption">Image Caption 4</div>
		</li>
		<li>
			<img src="assets/image5.gif" alt="Image 5">
			<div class="caption">Awesome</div>
		</li>
	</ul>
	<!-- this is the container to display the current image from the plugin -->
	<div id="displayImage">
	</div>
```

To initialize the plugin we call it on the ID of the image list
```javascript
	$('#bonggg').imageviewer();
```
This will parse through the list items, and extract the img src and text within the caption.
The plugin then hides the original list and renders the first image within the "displayImage" div

There are a few setup parameters that may be passed into the plugin:

------------------------------------------------------------------------
• <b>showCaptions</b>
<i>Boolean</i>
Default: true

•<b>imageSelector</b>
<i>String</i>
Default: "img"
Defines which selector to use to pull the image source out of the image list.
------------------------------------------------------------------------

<ul>
	<li>
		<b>showCaptions</b>
		<i>Boolean</i><br/>
		Default: true
		<br/><br/>
	</li>
	<li>
		<b>imageSelector</b>
		<i>String</i><br/>
		Default: "img"<br/>
		Defines which selector to use to pull the image source out of the image list.
		<br/><br/>
	</li>
	<li>
		<b>captionSelector</b>
		<i>String</i><br/>
		Default: ".caption"<br/>
		Defines which selector to use to pull the caption text.
		<br/><br/>
	</li>
	<li>
		<b>displayContainer</b>
		<i>String</i><br/>
		Default: "#displayImage"<br/>
		Defines which selector of the container that is used to render out the currently displayed image
		<br/><br/>
	</li>
	<li>
		<b>imageDisplayClass</b>
		<i>String</i><br/>
		Default: "displayImg"<br/>
		Define a class to be added to the currently displayed image
		<br/><br/>
	</li>
	<li>
		<b>captionDisplayClass</b>
		<i>String</i><br/>
		Default: "displayImg"<br/>
		Define a class to be added to the currently displayed caption
		<br/><br/>
	</li>
	<li>
		<b>fadeInDuration</b>
		<i>Number</i><br/>
		Default: 800<br/>
		Define (in milliseconds) how long the animation that fades the image in should take
		<br/><br/>
	</li>
	<li>
		<b>fadeOutDuration</b>
		<i>Number</i><br/>
		Default: 500<br/>
		Define (in milliseconds) how long the animation that fades the image out should take
		<br/><br/>
	</li>
	<li>
		<b>startIndex</b>
		<i>Number</i><br/>
		Default: 0<br/>
		Define which image should be displayed first (0 based array index)
		<br/><br/>
	</li>
</ul>

To initialize with parameters
```javascript
	$('#bonggg').imageviewer({fadeInDuration:1000,fadeOutDuration:1500,showCaptions:false});
```
This sets the plugin's fadeInDuration to 1 second, the fadeOutDuration to 1.5 seconds and to not show captions


## Version
0.0.1

## Author
Andy Schaaf [ secretlaboratoryllc@gmail.com ]