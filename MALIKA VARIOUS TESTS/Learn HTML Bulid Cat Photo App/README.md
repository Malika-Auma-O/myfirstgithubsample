-Add a head element above the body element.

-All pages should begin with <!DOCTYPE html>. This special string is known as a declaration and ensures the browser tries to meet industry-wide specifications.

-You can set browser behavior by adding self-closing meta elements in the head.

-Tell the browser to parse the markup into multiple languages by creating a meta element as a child of the head element. Set its charset attribute to UTF-8.

-The <title> element determines what browsers show in the title bar or tab for the page.

-Add the lang attribute with the value en to the opening html tag to specify that the language of the page is English. 

-HTML elements have opening tags like <h1> and closing tags like </h1>.

-A comment in HTML starts with <!--, and ends with -->.

-HTML5 has some elements that identify different content areas to make your HTML easier to read and help with Search Engine Optimization (SEO) and accessibility.
-Identify the main section of this page by adding a <main> opening tag before the h1 element, and a </main> closing tag after the last element.

#Nested elements should be placed two spaces further to the right of the element they are nested in

-You can add images to your website by using the img element. img has a "self-closing tag".

-HTML attributes are special words used inside the opening tag of an element to control the element's behavior. 

-The src attribute in an img element specifies the image's URL: <img src="https://www.example.com/the-image.jpg">

-All img elements should have an alt attribute  for screen readers to improve accessibility and is displayed if the image fails to load. <img src="cat.jpg" alt="A cat">

-You can link to another page with the anchor <a> element. <a href='https://freecodecamp.org'>Click this cat photos link</a> would link to freecodecamp.org. A link's text must be placed between the opening and closing tags

-You can turn a photo to a link <a href="https://freecatphotoapp.com" target="_blank"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

-Add a target attribute with the value _blank to the anchor (a) element's opening tag, so that the link opens in a new tab.

-Before adding any new content, you should make use of a section element to separate the <h2>cat photos</h2> content from the future content.

-When you add a lower rank heading element to the page, it's implied that you're starting a new subsection.<h3>
 
 -<ul>unordered list, <ol> ordered list.

 -Use list item <li> elements to create items in a list.

 -The <figure> element represents self-contained content and will allow you to associate an image with a caption.

 -A figure caption <figcaption> element is used to add a caption to describe the image contained within the figure element.

 -Emphasize a word using emphasis <em> element.(italicize).

 -The <strong> element is used to indicate that some text is of strong importance or urgent.

 -A  web form to collect information from users.

 -The action attribute indicates where form data should be sent. For example, <form action="/submit-url"></form> tells the browser that the form data should be sent to the path /submit-url

 -The <input>(self-closing) element allows you several ways to collect data from a web form.

 -There are many kinds of inputs you can create using the type attribute.<input type = "text"> <input type = "radio"> <input type = "checkbox">

 -Placeholder text is used to give people a hint about what kind of information to enter into an input. For example, <input type="text" placeholder="Email address">

 -To prevent a user from submitting your form when required information is missing, you need to add the required attribute to an input element.<input type = "text" required>

 -Use the button element to create a clickable button.<button>Click Here</button>

 -The button added will submit the form by default. However, relying on default behavior may cause confusion. Add the type attribute with the value submit to the button to make it clear that it is a submit button.<button type="submit">

 -You can use radio buttons for questions where you want only one answer out of multiple options.<input type = "radio">

 -<label> elements are used to help associate the text for an input element with the input element itself.<label><input type="radio">Indoor</label>

 -The id attribute is used to identify specific HTML elements.<input id="indoor">
 
 -Radio buttons can be selected at the same time. To make it so selecting one radio button automatically deselects the other, both buttons must have a name attribute with the same value.
 <label><input type="radio" name="indoor-outdoor">Indoor</label>
 <label><input type="radio" name="indoor-outdoor">Outdoor</label>

 -If you select the Indoor radio button and submit the form, the form data for the button is based on its name and value attributes. If your radio buttons do not have a value attribute, the form data will include indoor-outdoor=on, which is not useful when you have multiple buttons.
 <input type="radio" id="indoor" name="indoor-outdoor" value="indoor">
 For convenience, set the button's value attribute to the same value as its id attribute.
 
 -The <fieldset> element is used to group related inputs and labels together in a web form. fieldset elements are block-level elements, meaning that they appear on a new line. you can nest radio buttons within a fieldset.

 -The <legend> element acts as a caption for the content in the fieldset element

 -Forms commonly use checkboxes for questions that may have more than one answer.<input type="checkbox">

 -There's another way to associate an input element's text with the element itself. You can nest the text within a label element and add a for attribute with the same value as the input element's id attribute.
 <input type="checkbox" id="loving"><label for="loving">Loving</label>

Add a name attribute with a value to the checkbox input element.
While you won't notice this in the browser, doing this makes it easier for a server to process your web form, especially when there are multiple checkboxes.
<input type="checkbox" name="personality">

-Like radio buttons, form data for selected checkboxes are name / value attribute pairs. While the value attribute is optional, it's best practice to include it with any checkboxes or radio buttons on the page. 
<input type="checkbox" value="loving">
For convenience, set each checkbox's value attribute to the same value as its id attribute.

-In order to make a checkbox checked or radio button selected by default, you need to add the checked attribute to it. <input type="checkbox" checked>

-After the </main> element, add a <footer> element.