# Copying a Form from one Site to another

Following the steps below will allow you to copy an adaptive form from one rapid site onto another. This will require PostMan which can be downloaded freely from the following site: [Postman API Platform | Sign Up for Free](https://www.postman.com/)

A brief summary of how this will be accomplished is that each form as a form body which is sent each time the form is opened. By copying this body to the new site will fill a blank form with its profile.

Follow the below steps to do this:

1. Create a blank form on the site you are copying the form to with an identical name
2. Navigate to the site you are copying the form from 
    1. Navigate to the forms table in explorer by going through Settings &gt; Adaptive &gt; Adaptive Documents
    2. Open the form you want to copy on this list
3. Open the dev tools in the browser by clicking F12
4. Click the network tab [![image-1673394084724.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/I6B8bxEQMb2XY15v-image-1673394084724.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/I6B8bxEQMb2XY15v-image-1673394084724.png)
5. Click the inline refresh[![image-1673394142766.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/SeSCE9ICNGqGH1VA-image-1673394142766.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/SeSCE9ICNGqGH1VA-image-1673394142766.png)
6. Click on the network call that matches the document number [![image-1673394343794.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/nWeo74vDwMMSQYd4-image-1673394343794.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/nWeo74vDwMMSQYd4-image-1673394343794.png)
7. Click on the preview tab [![image-1673394306587.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/CMZcgVBqwzpA9rsJ-image-1673394306587.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/CMZcgVBqwzpA9rsJ-image-1673394306587.png)
8. Right click on the document object and click copy object
    
    [![image-1673395622460.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/0513Dp2FHWEhULdF-image-1673395622460.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/0513Dp2FHWEhULdF-image-1673395622460.png)
9. Open PostMan change the type of request to put, open the body tab, change the body type to raw, type the screenshot into the space[![image-1673395853682.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/q5Qwque8vMsrcaxX-image-1673395853682.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/q5Qwque8vMsrcaxX-image-1673395853682.png)
10. Paste your copied item profile next to document [![image-1673396060188.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/qbZfhd6K7LDVBaiq-image-1673396060188.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/qbZfhd6K7LDVBaiq-image-1673396060188.png)
11. Open the blank adaptive form you created earlier on the site you are copying to by navigating Explorer&gt; Settings&gt; Adaptive&gt; Adaptive documents
12. Once you have opened the blank item, open the Dev tools &gt; Network
    
    
    1. Enter any character into the description field, delete this character
    2. Press "Save"
    3. Click on the most recent network call that matches the item id
    4. Click on headers and copy the request URL[![image-1673399297743.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/6JeJKDTihdoKi33P-image-1673399297743.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/6JeJKDTihdoKi33P-image-1673399297743.png)
13. Paste the request URL into the url section on PostMan [![image-1673399356767.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/WUx0c5kwUzLFPyCz-image-1673399356767.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/WUx0c5kwUzLFPyCz-image-1673399356767.png)
14. On the developer console of the blank form navigate to the authorization section. Copy the bearer token from the first letter after the word "Bearer" [![image-1673399443059.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/Nx74CY4QzPIaCQd9-image-1673399443059.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/Nx74CY4QzPIaCQd9-image-1673399443059.png)
15. Go to post man, navigate to the authorization tab. Change the type to "Bearer Token". Paste the token into the token field. [![image-1673399543892.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/epQaALwpcJrgIt64-image-1673399543892.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/epQaALwpcJrgIt64-image-1673399543892.png)
16. Press "send" and check that your previously blank form now contains the form elements.