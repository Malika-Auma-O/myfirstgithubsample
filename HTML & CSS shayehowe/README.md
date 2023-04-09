Semantics within HTML is the practice of giving content on the page meaning and structure by using the proper element. Semantic code describes the value of content on a page, regardless of the style or appearance of that content.

 Divisions or <div>s and <span>s don’t hold any semantic value. They are containers for styling purposes only.

 Paragraphs are semantic in that content wrapped within a <p> element is known and understood as a paragraph. <div>s and <span>s do not hold any such meaning and are simply containers.

 Most elements are either block- or inline-level elements. 

 Block-level elements begin on a new line, stacking one on top of the other, and occupy any available width.

 Inline-level elements do not begin on a new line. They fall into the normal flow of a document, lining up one after the other, and only maintain the width of their content.

 A <div> is a block-level element that is commonly used to identify large groupings of content, and which helps to build a web page’s layout and design. 
 
 A <span>, on the other hand, is an inline-level element commonly used to identify smaller groupings of text within a block-level element.

 choose a class or id attribute value that refers to the content of an element

 For the longest time the structure of a web page was built using divisions

HTML5 introduced new structurally based elements, including the <header>, <nav>, <article>, <section>, <aside>, and <footer> elements.

 the <header> element may include a heading, introductory text, and even navigation.

 The <nav> element should be reserved for primary navigation sections only, such as global navigation, a table of contents, previous/next links, etc.

 links included within the <nav> element will link to other pages within the same website or to parts of the same web page. Miscellaneous one-off links should not be wrapped within the <nav> element; they should use the anchor element, <a>

 The <article> element is used to identify a section of independent, self-contained content that may be independently distributed or reused. We’ll often use the <article> element to mark up blog posts, newspaper articles, user-submitted content.

 The <section> element is used to identify a thematic grouping of content, which generally, but not always, includes a heading. The <section> element is commonly used to break up and provide hierarchy to a page.

Deciding Between <article>, <section>, or <div> Elements
 If the content is being grouped solely for styling purposes, use the <div> element.
If the content adds to the document outline and it can be independently redistributed or syndicated, use the <article> element.
If the content adds to the document outline and represents a thematic group of content, use the <section> element.

The <aside> element holds content, such as sidebars, inserts, or brief explanations, that is tangentially related to the content surrounding it. When used within an <article> element, for example, the
 <aside> element may identify content related to the author of the article.
 <aside> element, are block-level elements and as such will appear on a new line

 The <footer> element identifies the closing or end of a page, article, section, or other segment of a page.

 We can create an on-page link by first setting an id attribute on the element we wish to link to, then using the value of that id attribute within an anchor element’s href attribute.
  we can place an id attribute value of top on the <body> element. Now we can create an anchor element with an href attribute value of #top, pound sign and all, to link to the beginning of the <body> element.
  <body id="top">
  ...
  <a href="#top">Back to top</a>
  ...
</body>

as the header is replicated on other pages, linking back to the home page will make sense, by making our “main heading” text inside the <h1> element within our <header> element link to the index.html page even if we are in the index.html.

In order to navigate across all of the different pages, we’re going add in a navigation menu, using the <nav> element, within our <header> element.

We’ll be creating the pages to go with our home page, so we should create links for all of them in the nav. <a href="index.html">Home</a> etc

Let’s also add the same navigation menu above from our <header> element to our <footer> element for convenience.

Within the <section> element that introduces our home, just below our header, we should also include a link to contact. Placing a link below the paragraph will work perfectly.

add links to all of the sections teasing our other pages. Inside each section, let’s wrap both the <h3> and <h5> elements within an anchor element linking to the proper page.

Inside each section, let’s wrap both the <h3> and <h5> elements within an anchor element linking to the proper page.

Now we need to create a handful of new pages.These files should live within the same folder as the index.html file.
To ensure that all of our pages look the same, let’s make sure that all of these new files have the same document structure and <header> and <footer> elements as the index.html file.





Getting to Know CSS
Within CSS, all styles cascade from the top of a style sheet to the bottom, allowing different styles to be added or overwritten as the style sheet progresses.

A selector’s specificity weight, along with its placement in the cascade, identifies how its styles will be rendered.
the ID selector has a higher specificity weight than the class selector, and the class selector has a higher specificity weight than the type selector.
 For example, if a paragraph element is selected using a type selector in one place and an ID selector in another, the ID selector will take precedence over the type selector regardless of where the ID selector appears in the cascade.

 When selectors are combined they should be read from right to left. The selector farthest to the right, directly before the opening curly bracket, is known as the key selector. The key selector identifies exactly which element the styles will be applied to.
 .hotdog p{
  background: yellow;
}

Elements within HTML can have more than one class attribute value so long as each value is space separated. With that, we can place certain styles on all elements of one sort while placing other styles only on specific elements of that sort.

All color values within CSS are defined on an sRGB (or standard red, green, and blue) color space.

Currently there are four primary ways to represent sRGB colors within CSS: keywords(red,blue), hexadecimal notation (#ff6600), and RGB (rgb(255, 102, 0)) and HSL (hsl(24, 100%, 50%).) values.

Length values in CSS come in two different forms, absolute and relative.
-Absolute length values are the simplest length values, as they are fixed to a physical measurement, such as inches, cm, or mm, or px.
-Relative length values are not fixed units of measurement; they rely on the length of another measurement. 
(a)the % lengths are defined in relation to the length of parent element.
(b)The em unit length is calculated based on an element’s font size. if an element has a font size of 14 pixels and a width set to 5em, the width would equal 70 pixels (14 pixels multiplied by 5).





Opening the Box Model
We can change an element’s display property value by selecting that element within CSS and declaring a new display property value. A value of block will make that element a block-level element.
p {
  display: block;
}
p {
  display: inline;
}

Using inline-block value will allow an element to behave as a block-level element, accepting all box model properties. However, the element will be displayed in line with other elements, and it will not begin on a new line by default.
p {
  display: inline-block;
}
Paragraph one. Paragraph two. Paragraph three.
Usually a small space will exist between two inline-block elements.

using a value of none will completely hide an element and render the page as if that element doesn’t exist. 
div {
  display: none;
}





What Is the Box Model?
every element on a page is a rectangular box and may have width, height, padding, borders, and margins.

According to the box model, the total width of an element can be calculated using the following formula:
margin-right + border-right + padding-right + width + padding-left + border-left + margin-left
Width: 492px = 20px + 6px + 20px + 400px + 20px + 6px + 20px

We set a width property value of 400 pixels, but the actual width of our element is 492 pixels.take into account padding, borders, and margins for all four sides of the box.

 the total height of an element can be calculated using the following formula:
margin-top + border-top + padding-top + height + padding-bottom + border-bottom + margin-bottom
Height: 192px = 20px + 6px + 20px + 100px + 20px + 6px + 20px

The width and height may be 0 pixels, but browsers, by default, will render every element with size.

The default width of an element depends on its display value. Block-level elements have a default width of 100%, consuming the entire horizontal space available. Inline-block elements expand and contract horizontally to accommodate their content.

The default height of an element is determined by its content. An element will expand and contract vertically as necessary to accommodate its content/

inline-level elements will not accept the width and height properties or any values tied to them.

Depending on the element, browsers may apply default margins and padding to an element to help with legibility and clarity. We will generally see this with text-based elements. 

we discussed using a CSS reset to tone all of these default values down to zero. Doing so allows us to work from the ground up and to specify our own values.

The margin property allows us to set the amount of space that surrounds an element.Margins for an element fall outside of any border and are completely transparent in color

One oddity with the margin property is that vertical margins, top and bottom, are not accepted by inline-level elements. 

The padding property falls inside of an element’s border, should an element have a border. The padding property is used to provide spacing directly within an element.

Margins only work horizontally—left and right—on inline-level elements. Padding works on all four sides of inline-level elements; however, the vertical padding—the top and bottom—may bleed into the lines above and below an element.

When using the shorthand margin property to set the same value for all four sides

To set one value for the top and bottom and another value for the left and right sides of an element, specify two values: top and bottom first, then left and right.

Here we are placing margins of 10 pixels on the top and bottom of a <div> and margins of 20 pixels on the left and right:
div {
  margin: 10px 20px;
}

To set unique values for all four sides of an element, specify those values in the order of top, right, bottom, and left, moving clockwise. Here we are placing margins of 10 pixels on the top of a <div>, 20 pixels on the right, 0 pixels on the bottom, and 15 pixels on the left.
div {
  margin: 10px 20px 0 15px;
}

When we wish to identify only one margin or padding value, it is best to use the longhand properties.
margin-top: 10px;
padding-left: 6px;

The margin and padding properties are completely transparent and do not accept any color values. Being transparent, though, they show the background colors of relative elements. For margins, we see the background color of the parent element, and for padding, we see the background color of the element the padding is applied to.

Borders fall between the padding and margin, providing an outline around an element.

The border property requires three values: width, style, and color. Shorthand values for the border property are stated in that order—width, style, color. In longhand, these three values can be broken up into the border-width, border-style, and border-color properties.

 The most common border style values are solid, double, dashed, dotted, and none,

Here is the code for a 6-pixel-wide, solid, gray border that wraps around all four sides of a <div>: 
border: 6px solid gray;

borders can be placed on one side of an element at a time if we’d like. Doing so requires new properties: border-top, border-right, border-bottom, and border-left. 

 if we wish to change only the width of the bottom border we can use the following code: border-bottom-width: 12px;

The border-radius property accepts length units, including percentages and pixels, that identify the radius by which the corners of an element are to be rounded.

A single value will round all four corners of an element equally; two values will round the top-left/bottom-right and top-right/bottom-left corners in that order; four values will round the top-left, top-right, bottom-right, and bottom-left corners in that order.

The border-radius property may also be broken out into longhand properties that allow us to change the radii of individual corners of an element.border-top-right-radius: 5px;

The box-sizing property allows us to change exactly how the box model works and how an element’s size is calculated. The property accepts three primary values—content-box, padding-box, and border-box

The content-box value is the default value, leaving the box model as an additive design. If we don’t use the box-sizing property, this will be the default value for all elements.
div {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
}

For reference, the most common vendor prefixes are outlined here:
Mozilla Firefox: -moz-
Microsoft Internet Explorer: -ms-
Webkit (Google Chrome and Apple Safari): -webkit-

The padding-box value alters the box model by including any padding property values within the width and height of an element.
When using the padding-box value, if an element has a width of 400 pixels and a padding of 20 pixels around every side, the actual width will remain 400 pixels. As any padding values increase, the content size within an element shrinks proportionately.
box-sizing: padding-box;
As the CSS specification has evolved, the padding-box value for the box-sizing property has been deprecated and should not be used.

 the border-box value alters the box model so that any border or padding property values are included within the width and height of an element.

  When using the border-box value, if an element has a width of 400 pixels, a padding of 20 pixels around every side, and a border of 10 pixels around every side, the actual width will remain 400 pixels.
  box-sizing: border-box;

The best box-sizing value to use is border-box. The border-box value makes our math much, much easier. If we want an element to be 400 pixels wide, it is, and it will remain 400 pixels wide no matter what padding or border values we add to it.

The only drawback to using the box-sizing property is that it isn’t supported in every browser

Let’s start by adjusting our box size to use the border-box version of the box model, which will make sizing all of our elements much easier. 
Within our main.css file, just below our reset, let’s add a comment to identify the code for what will become our grid and help determine the layout of our website. 
We’re putting this below our reset so that it falls in the proper position within the cascade.

we can use the universal selector, *, along with universal pseudo-elements, *:before and *:after, to select every imaginable element and change the box-sizing to border-box.

Next we’ll create a class that will serve as a container for our elements. We can use this container class on different elements to set a common width, center the elements on the page, and apply some common horizontal padding.

Just below our universal selector rule set, let’s create a selector with a class of container. Within this selector let’s set our width to 960 pixels, our left and right padding to 30 pixels, our top and bottom margins to 0, and our left and right margins to auto.

Setting a width tells the browser definitively how wide any element with the class of container should be. 

Using a left and right margin of auto in conjunction with this width lets the browser automatically figure out equal left and right margins for the element, thus centering it on the page. 

Lastly, the left and right padding ensures that our content isn’t sitting directly on the edge of the element and provides a little breathing room for the content.

let’s go ahead and apply the class of container throughout our HTML to the <header> and <footer> elements on each page, including the index.html,an all html files.

let’s add the class of container to each <section> element on the page

Additionally, let’s wrap all of the <h1> elements on each page with a <section> element with the class of container.

Now that all of our content is centered, let’s create some vertical spacing between elements. For starters let’s place a 22-pixel bottom margin on a few of our heading and paragraph elements. We’ll place and comment on these typography styles below our grid styles.
h1, h3, h4, h5, p {
	margin-bottom: 22px;
  }
We intentionally skipped <h2> and <h6> elements, as the design does not call for margins on <h2> elements and as we won’t be using any <h6> elements at this time.

Let’s also try our hand at creating a border and some rounded corners. We’ll start by placing a button within the top <section> element on our home page, just below the header.
Previously we added an <a> element within this <section> element. Let’s add the classes of btn and btn-alt to this anchor.
<a class="btn btn-alt">...</a>

Below our typography rule set, let’s create a new section of the CSS file for buttons.

To begin let’s add the btn class and apply some common styles that can be shared across all buttons. We’ll want all of our buttons to have a 5-pixel border-radius. They should be displayed as inline-block elements so we can add padding around all four sides without issue; we’ll remove any margin.

We’ll also want to include styles specific to this button, which we’ll do by using the btn-alt class. Here we’ll add a 1-pixel, solid, gray border with 10 pixels of padding on the top and bottom of the button and 30 pixels of padding on the left and right of the button.

Because we’re working on the home page, let’s also add a bit of padding to the <section> element that contains our <a> element with the classes of btn and btn-alt. We’ll do so by adding a class attribute value of intro to the <section> element, alongside the container class attribute value, as this will be the leading section of our website.

Next we’ll want to create a new section within our CSS file for home page styles, and, once we’re ready, we’ll use the class of intro to apply padding around all four sides of the <section> element.

Positioning Content
One way to position elements on a page is with the float property.

the float property allows us to take an element, remove it from the normal flow of a page, and position it to the left or right of its parent element. All other elements on the page will then flow around the floated element. An <img> element floated to the side of a few paragraphs of text, for example, will allow the paragraphs to wrap around the image as necessary.

When the float property is used on multiple elements at the same time, it provides the ability to create a layout by floating elements directly next to or opposite each other, as seen in multiple-column layouts

The float property accepts a few values; the two most popular values are left and right, which allow elements to be floated to the left or right of their parent element.
img {
  float: left;
}

