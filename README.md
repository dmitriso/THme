# THme

## GreenLight Project-1
<hr />
<p>Team-Members:</p>
<ul>
<li>Nate King</li>
<li>John Hauth</li>
<li>Dmitri So</li>
<li>Dale Jacobs</li>
</ul>


## Table of Contents
 * [Description](#description)
    + [User Story](#user-story)
    + [Product](#product)
    + [HTML and CSS](#html-and-css)
    + [Javascript functionality](#javascript-functionality)
  * [Screenshots](#screenshots)
  * [Technologies and Credits](#technologies-and-credits)
  * [License](#license)
<hr />


## Description

### User Story
<hr />
<p>“As someone with an ailment looking for relief, I want a website  that’ll give me recommendations for strains suited for my symptom. When I am presented with a list of recommended strains I can click on each of the names. When selected, I am presented with the flavor profiles and descriptions of of each strain. I am also presented with a list of holistic home remedies, to pair with my strains.”</p>


### Product
<hr />
<p>Warning we are not medical professionals! This app is not meant to treat medical illnesses.</p>

<p>This app has been created between four full-stack developer students calling themselves GreenLight. Using the tools we've learned and/or self-taught, we've built this app to recommend medical cannabis strains for the user's ailments. Based on the user symptoms, certain medicinal cannabis strains are recommended. The recommendations for medical cannabis are selected and pulled from a server-side API (The Strain API).
Along with cannabis strains, a selection of herbal home remedies is also recommended to the user. Those holistic remedies are sourced and pulled from another server-side API (Personal Remedies API).
</p>

### HTML and CSS
When the user first enters the site, it is greeted with a prompt displaying what THme is about, a cannabis recommendation application. They then can scroll down to the age verification, where they can select their birthday. If no birthday is selected, it sends an alert again displaying that the user must be 21 or older to proceed. Next, the user is prompted with a card displaying that this application is strictly recommendations on cannabis strains and herbal remedies. Proceeding, the users are faced with cards in a cascading effect that displays the steps of the application. You select an ailment, a strain name, a strain description displays, and then below users can see the different effects, profiles, and herbal remedies based on their choices. We went with this layout for simplicity and logical reasoning on where certain cards are placed. The color pallet and background image is in inspiration to the cannabis industry and the medicine that it provides. The application displays an easy to use interface that every patient would be able to navigate through.


### JavaScript Functionality
The user is presented with a home screen that asks for age verification. The options for month, day, & year are generated dynamically via JavaScript. Once the user inputs their birth date, it is then converted into unix time and the arithmetic is done to verify the users age. UNder 21 they are presented with an alert that they must be 21 to enter otherwise the user is allowed to proceed. 

Next a modal gives the user a disclaimer stating that all recommendations are just suggestions and they user should check with their doctor before trying any medical cannabis or herbal remedies. Once the user agrees by clicking continue they are brought to the app.  

First, the user is given a dropdown with a list of ailments to choose from. This dropdown is created dynamically via JavaScript when the page loads. We choose a dropdown to control what ailments the user can choose from as the options are limited to what the Strain API provides. Once the user picks an ailment and submits, the api is called and the strain options are narrowed down to just that ailment. The API returns on average one-thousand strains per ailment so functionality was written to only return five random strains from the api pull. 

At this time the Personal Remedies API is also called to give recommendations on what herbal supplements will help the user for the chosen ailment. Three of the ailments return null so added custom answers had to be added. The user is not presented with the results right away. They are provided a button that, if they chose to see the results, will add the results to the DOM. 

The presented five strain recommendations are all active to being clicked on byu an event listener. When a strain is clicked on the flavors, positive and negative effects, and strain description will appear in the DOM. The user is allowed to save the selected strain to local storage. 

When a user originally loads the page, if any strains are saved in local storage they are dynamically added to the saved strains dropdown. If a user saves a new strain it is appended to this list. If a uer wants to pull up the information about a saved strain, they need to select it in the drop down and click the 'Display Saved Strain info' button. This will add that strains information to the DOM. 

Lastly, a "Clear Saved Strain History" button is on the screen for the user to clear out the list of saved strains in case the list gets too long or they just want to clean house.

## Screenshots

<hr />

###### click to expand
<details>
    <!--INDEX PAGE IMAGES-->
	<tr>
    	<td>
            <h1>Full Application Demo</h1>
			<img width="400" alt="400 index" src="assets/images/THmeDemoFull.gif">
		</td>
		<td>
            <h1>Save Strains Demo</h1>
			<img width="400" alt="400 index" src="assets/images/THmeLocalStorage.gif">
		</td>
	</tr>
<summary></summary>

</details>
<p></p>

## Technologies and Credits
<hr />

[Sass](https://sass-lang.com/guide) (CSS-Preprocessor)

[Foundation](https://get.foundation/index.html) (CSS-Framework)

[The-Strain-API](http://strains.evanbusse.com/index.html) (Third-Party-API)

[Personal-Remedies-API](https://nutridigm-api-dev.azurewebsites.net/swagger/ui/index) (Third-Party-API)

[Herbal-Commit-Tea](https://herbalcommittea.com/blog/5%20Herbs%20for%20Menstrual%20Cramps%20&%20Period%20Symptoms) (Web-Source)

[Garrow-Wellness-Center](https://garrowwellnesscenter.com/top-5-best-natural-muscle-relaxers/) (Web-Source)


## Deployed URLs
<hr />

[GitHub-Repository](https://github.com/dmitriso/THme)

[THme-App](https://dmitriso.github.io/THme/)


## License
<hr />
MIT License
Copyright (c) 2020 GreenLight
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.