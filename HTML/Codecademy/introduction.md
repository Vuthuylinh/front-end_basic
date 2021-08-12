# Introduction HTML
- HTML stands for HyperText Markup Language and is used to create the structure and content of a webpage.
- Most HTML elements contain opening and closing tags with raw text or other HTML tags between them.
- HTML elements can be nested inside other elements. The enclosed element is the child of the enclosing parent element.
- Any visible content should be placed within the opening and closing <body> tags.
Headings and sub-headings, <h1> to <h6> tags, are used to enlarge text.

1. <p>: paragraph ; <span> and <div> tags also specify text or blocks.
2. <em> render as italic emphasis.
3. <strong> render as bold emphasis.
4. <br> or <br/> Line break element.
5. Unordered Lists <ul></ul>
    ```js
        <ul>
           <li>Limes</li>
           <li>Tortillas</li>
           <li>Chicken</li>
        </ul>
    ```
6. Ordered Lists <ol></ol>
    ```js
        <ol>
           <li>Limes</li>
           <li>Tortillas</li>
           <li>Chicken</li>
        </ol>
    ```
7. images : <img src="image-location.jpg" alt="image description/alterative text" />
8. video:
 ```js
   <video src="myVideo.mp4" width="320" height="240" controls>
        Video not supported
    </video>
 ```
 - controls attribute instructs the browser to include basic video controls: pause, play and skip.
 - “Video not supported”, between the opening and closing video tags will only be displayed if the browser is unable to load the video.
