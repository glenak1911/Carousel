# Carousel 
8/19/2015 - Began research on different carousel technologies. I explored the option of creating one from scratch, using some of the premade plugins. Since I am very interested in advancing my web development skills, but still only have a basic understanding of javascript/jquery, I opted to follow some guides on creating a carousel from scratch. This will help me to gain a better understanding of the syntax and nuances related to these languages.

I broke the problem down into a few areas:

Markup
	Create a basic html page with divs to contain the buttons/images
	create placeholders for images and buttons to cycle left and right
Presentation
	format the page to arrange the images into a carousel format
	format the borders
	ensure sizing is covered
Interactivity
	Create functionality for left and right button click
	create functionality to connect to api
	Parse the JSON request
	Get the image links and add them to the image tag in the markup
	

I sketched out an idea of what I wanted it to look like. Ideally, I would have liked shadows, smooth scrolling, and fading in/out, but for the sake of time, I decided to keep it simple and build it out from there.

I started with a basic html page with a title of Carousel Example. Then, based on my research I created an unordered list. I needed a few references and guides to create the css to format the presentation of the page, and to also give the page a nice background. 

8/20/2015 - I created a preliminary site with html and css. I now have to work on the javascript/jquery. I anticipate the most difficult part will be getting it to cycle around. I've been reading about infinite carousels, and I think this is the solution that will fulfill this requirement. Later on, I did find a solution to getting the carousel to transition. 

The most difficult part so far was integrating the widget into the olapic API, as I kept getting the query string wrong. It was only when I noticed the correct structure of the query that I was able to proceed. I used the url query to pull the list of most recent images from the Demo account. I pulled a lot of values, and I knew I had to find a way to sanitize the data to pull exactly what I needed. I looked throgh the JSON and found an array with the 20 latest images.

8/21/2015
I was able to copy the array returned to a local array. I then knew I had to iterate through the first 6 and assign them to the image items in the html list. I noticed, however, that the same image was being written to each link. I then set an id on each image in the markup, and assigned the url of he current index to the corresponding image tag.

