# Copying a Form from one Site to another

Following the steps below will allow you to copy an adaptive form from one rapid site onto another. This will require PostMan which can be downloaded freely from the following site: [Postman API Platform | Sign Up for Free](https://www.postman.com/)

A brief summary of how this will be accomplished is that each form as a form body which is sent each time the form is opened. By copying this body to the new site will fill a blank form with its profile.

Follow the below steps to do this:

1. Create a blank form on the site you are copying the form to with an identical name
2. Navigate to the site you are copying the form from 
    1. Navigate to the forms table in explorer by going through Settings &gt; Adaptive &gt; Adaptive Documents
    2. Open the form you want to copy on this list
3. Open the dev tools in the browser by clicking F12
4. Click the network tab ![image-1673394084724.png](./downloaded_image_1705285209725.png)
5. Click the inline refresh![image-1673394142766.png](./downloaded_image_1705285210739.png)
6. Click on the network call that matches the document number ![image-1673394343794.png](./downloaded_image_1705285211753.png)
7. Click on the preview tab ![image-1673394306587.png](./downloaded_image_1705285212769.png)
8. Right click on the document object and click copy object
    
    ![image-1673395622460.png](./downloaded_image_1705285213785.png)
9. Open PostMan change the type of request to put, open the body tab, change the body type to raw, type the screenshot into the space![image-1673395853682.png](./downloaded_image_1705285214799.png)
10. Paste your copied item profile next to document ![image-1673396060188.png](./downloaded_image_1705285215810.png)
11. Open the blank adaptive form you created earlier on the site you are copying to by navigating Explorer&gt; Settings&gt; Adaptive&gt; Adaptive documents
12. Once you have opened the blank item, open the Dev tools &gt; Network
    
    
    1. Enter any character into the description field, delete this character
    2. Press "Save"
    3. Click on the most recent network call that matches the item id
    4. Click on headers and copy the request URL![image-1673399297743.png](./downloaded_image_1705285216827.png)
13. Paste the request URL into the url section on PostMan ![image-1673399356767.png](./downloaded_image_1705285217838.png)
14. On the developer console of the blank form navigate to the authorization section. Copy the bearer token from the first letter after the word "Bearer" ![image-1673399443059.png](./downloaded_image_1705285218863.png)
15. Go to post man, navigate to the authorization tab. Change the type to "Bearer Token". Paste the token into the token field. ![image-1673399543892.png](./downloaded_image_1705285219877.png)
16. Press "send" and check that your previously blank form now contains the form elements.