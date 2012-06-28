ImageViewer: a JQuery Plugin
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
This will parse through the list items, and extract the img src and text within the caption
The plugin then hides the original list and renders the first image within the displayImage div

there are a few setup parameters that may be passed into the plugin:
<ul>
	<li>
		<b>showCaptions</b>
		<i>Boolean</i><br/>
		Default: true<br/>
	</li>
	<li>
		<b>imageSelector</b>
		<i>String</i><br/>
		Default: "img"<br/>
		Defines which selector to use to pull the image source out of the image list.
	</li>
	<li>
		<b>captionSelector</b>
		<i>String</i><br/>
		Default: ".caption"<br/>
		Defines which selector to use to pull the caption text.
	</li>
	
	
</ul>


## Version
0.0.1

## Author
Andy Schaaf [ secretlaboratoryllc@gmail.com ]