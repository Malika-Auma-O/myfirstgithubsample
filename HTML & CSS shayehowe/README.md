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