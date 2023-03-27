-Add a <main> element within the existing body element. It will eventually contain pricing information about coffee and desserts offered by the cafe.

-The name of the cafe is CAMPER CAFE. capitalized letters to make <h1> stand out

-To let visitors know the cafe was founded in 2020, add a <p> element below the h1 element with the text Est. 2020.

-There will be two <section> on the menu, one for coffees and one for desserts.

-Create an <h2> element in each section element, give a heading

- link the styles.css to html <link href="styles.css" rel="stylesheet"/>

-Center <h1> <h2> <p> elements using one selector list by setting text-align property to the value center.

-Add another style to the file that changes the background for the <body> element. add a background-image property and set its value to url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg).

-The <div> element is used mainly for design layout purposes. Add a div element inside the body element where all the elements above will be inside.

-The goal now is to make the div not take up the entire width of the page. Create a new type selector in the style sheet that gives your div element a width of 300px.

-Comments in CSS look like this: /* comment here */

-Use the existing <div> selector to set the background color of the div element to be burlywood.

-Now it's easy to see that the text is centered inside the div element. Currently, the width of the div element is specified in pixels (px). Change the width property's value to be 80%, to make it 80% the width of its parent element (body).

-The current width of the menu will always take up 80% of the body element's width. On a very wide screen, the coffee and dessert appear far apart from their prices.
Add a max-width property to the menu class with a value of 500px to prevent it from growing too wide.

-Next, you want to center the div horizontally. You can do this by setting its margin-left and margin-right properties to auto. Using these two margin properties, center the div element within the body element.

-A class selector is defined by a name with a dot directly in front of it

-Add an empty <article> element under each <h2> heading. article elements commonly contain multiple elements that have related information.

- add the coffee flavours and prices using <article> elements with two nested <p> elements inside each article.

-The flavors and prices are currently stacked on top of each other and centered with their respective p elements. It would be nice if the flavor was on the left and the price was on the right.

-Using your new .flavor class as a selector, set the text-align property's value to left.

-Next, you want to align the price to the right. Add a class named .price to your p element with prices and align right

- <p> elements are block-level elements, so they take up the entire width of their parent element.

-To get them on the same line, you need to apply some styling to the <p> elements, so they behave more like inline elements. Add a class attribute with the value item to each <article>

-You can style all the <p> elements nested anywhere in elements with a class named item like this: .item p { }  add a display property with value inline-block so the p elements behave more like inline elements.

-The price didn't stay over on the right. This is because inline-block elements only take up the width of their content. To spread them out, add a width property to the flavor and price class selectors that have a value of 50% each.

-Styling the p elements as inline-block and placing them on separate lines in HTML file in the code creates an extra space to the right of the first p element, causing the second one to shift to the next line

-You could keep trying various percentages for the widths. Instead, use the back space key on your keyboard to move the p element with the class price next to the p element with the class flavor so that they are on the same line in the editor.

-If you make the width of the page preview smaller, you will notice at some point, some of the text on the left starts wrapping around to the next line. This is because the width of the p elements on the left side can only take up 50% of the space.

Since you know the prices on the right have significantly fewer characters, change the flavor class width value to be 75% and the price class width value to be 25%.

-add .dessert class to the .flavor so they have same rules

-You can give your menu some space between the content and the sides with various padding properties.
Give the menu class a padding with value 20px

-Change all the text in your body, by adding a font-family property with the value sans-serif. This is a fairly common font that is very readable.

-It is a bit boring for all the text to have the same font-family. You can still have the majority of the text sans-serif and make just the h1 and h2 elements different using a different selector.
Style both the h1 and the h2 elements so that only these elements' text use Impact font

-You can add a fallback value for the font-family by adding another font name separated by a comma. Fallbacks are used in instances where the initial is not found/available.
Add the fallback font serif after the Impact font.

-Make the Est. 2020 text italicized by creating an established class selector and giving it the font-style property with the value italic.

-The typography of heading elements (e.g. h1, h2) is set by default values of users' browsers.
Add two new type selectors (h1 and h2). Use the font-size property for both, but use the value 40px for the h1 and 30px for the h2.

-Add a footer element below the main element, where you can add some additional information.

-Inside the footer, add a p element. Then, nest an anchor (a) element in the p that links to https://www.freecodecamp.org and has the text Visit our website.

-Add a second p element below the one with the link and give it the text 123 Free Code Camp Drive

-You can use an hr element to display a divider between sections of different content.
First, add an hr element between the p element with the class established and the first section element. Note that hr elements are self closing.

-The default properties of an hr element will make it appear as a thin light grey line. You can change the height of the line by specifying a value for the height property.

-Change the background color of the hr element to brown so it matches the color of the coffee beans.

-Make all the edges of the hr element the same color as the background of it using the border-color property.

-Change the height property of the hr to be 2px, so the total height of it becomes 4px.

-Go ahead and add another hr element between the main element and the footer element.

-To create a little more room around the menu, add 20px of space on the inside of the body element by using the padding property.

-Focusing on the menu items and prices, there is a fairly large gap between each line.
Target all the p elements nested in elements with the class named item and set their top and bottom margin to be 5px.

-Using the same style selector in the previous step, make the font size of the items and prices larger by using a value of 18px.

-Changing the margin-bottom to 5px looks great. However, now the space between the Cinnamon Roll menu item and the second hr element does not match the space between the top hr element and the Coffee heading.
Add some more space by creating a class named bottom-line using 25px for the margin-top property.

-Now add the bottom-line class to the second hr element so the styling is applied.

-To keep the CSS organized, add a comment at the end of styles.css with the text FOOTER.

-Moving down to the footer element, make all the text have a value of 14px for the font size.

-The default color of a link that has not yet been clicked on is typically blue. The default color of a link that has already been visited from a page is typically purple.
To make the footer links the same color regardless if a link has been visited, use a type selector for the anchor element (a) and use the value black for the color property.

-You change properties of a link when the link has actually been visited by using a pseudo-selector that looks like a:visited { propertyName: propertyValue; }.
Change the color of the footer Visit our website link to be grey when a user has visited the link.

-You change properties of a link when the mouse hovers over them by using a pseudo-selector that looks like a:hover { propertyName: propertyValue; }.

-ou change properties of a link when the link is actually being clicked by using a pseudo-selector that looks like a:active { propertyName: propertyValue; }.

-The menu text CAMPER CAFE has a different space from the top than the address's space at the bottom of the menu. This is due to the browser having some default top margin for the h1 element.
Change the top margin of the h1 element to 0 to remove all the top margin.

-To remove some of the vertical space between the h1 element and the text Est. 2020, change the bottom margin of the h1 to 15px

-To decrease the default margin space below the address p element, create a class selector named address and use the value 5px for the margin-bottom property.

-Under the Coffee/Dessert headings, add an image

-The image you added is not centered horizontally like the Coffee heading above it. img elements are "like" inline elements.

To make the image behave like heading elements (which are block-level), create an img type selector and use the value block for the display property and use the margin-left auto and margin-right auto values to center it horizontally.

-dd a negative top margin to the img elements to pull them up from their current positions. Negative values are created using a - in front of the value. To complete this project, go ahead and use a negative top margin of 25px in the img type selector.