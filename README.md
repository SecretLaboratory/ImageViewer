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
	<!-- Just a regular unordered list with an img and caption within each li -->
	<ul class="yourListClass" id="yourListID">
		<li>
			<img src="/asset/image1.jpg">
			<div class="caption">Your Image Caption</div>
		</li>
		<li>
			<img src="/asset/image2.jpg">
			<div class="caption">Your Image Caption #2</div>
		</li>
		<li>
			<img src="/asset/image3.jpg">
			<div class="caption">Your Image Caption #3</div>
		</li>
	</ul>
	<!-- this is the div we will be displaying our image in -->
	<div id="displayImage"></div>
	
```

## Version
0.0.1

## Author
Andy Schaaf [ secretlaboratoryllc@gmail.com ]