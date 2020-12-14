# THme

### GreenLight Project-1
<hr />
<p>Team-Members:</p>
<ul>
<li>Nate King</li>
<li>John Hauth</li>
<li>Dmitri So</li>
<li>Dale Jacobs</li>
</ul>



### User Story:
<hr />
<p>“As someone with an ailment looking for relief, I want a website  that’ll give me recommendations for strains suited for my symptom. When I am presented with a list of recommended strains I can click on each of the names. When selected, I am presented with the flavor profiles and descriptions of of each strain. I am also presented with a list of holistic home remedies, to pair with my strains.”</p>


### Product Desciption:
<hr />
<p>Warning we are not medical professionals! This app is not meant to treat medical illnesses.</p>

<p>This app has been created between four full stack developer students. Using the tools we've learned and/or self taught, we've built this app to recommend medical marajauna strains for the user's ailments. Based off the user symptoms, certain medicinal cannabis strains are reccomended. The recommendations for medical marijauna are selected and pulled from a server side API (The Strain API).
Along with cannabis strains, a selection of herbal home remedies are also recommended to the user. Those holistic remedies are sourced and pulled from another server side API (Nutridigm API).</p>

### HTML & CSS

### JavaScript Functionality
The user is presented with a home screen that asks for age verification. The options for month, day, & year are generated dynamically via JavaScript. Once the user inputs their birth date, it is then converted into unix time and the arithmetic is done to verify the users age. UNder 21 they are presented with an alert that they must be 21 to enter otherwise the user is allowed to proceed. 

Next a modal gives the user a disclaimer stating that all recommendations are just suggestions and they user should check with their doctor before trying any medical cannabis or herbal remedies. Once the user agrees by clicking continue they are brought to the app.  

First, the user is given a dropdown with a list of ailments to choose from. This dropdown is created dynamically via JavaScript when the page loads. We choose a dropdown to control what ailments the user can choose from as the options are limited to what the Strain API provides. Once the user picks an ailment and submits, the api is called and the strain options are narrowed down to just that ailment. The API returns on average one-thousand strains per ailment so functionality was written to only return five random strains from the api pull. 

At this time the Personal Remedies API is also called to give recommendations on what herbal supplements will help the user for the chosen ailment. Three of the ailments return null so added custom answers had to be added. The user is not presented with the results right away. They are provided a button that, if they chose to see the results, will add the results to the DOM. 

The presented five strain recommendations are all active to being clicked on byu an event listener. When a strain is clicked on the flavors, positive and negative effects, and strain description will appear in the DOM. 

### Screenshots:
<hr />
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

### Technologies & Credits:
<hr />

[Sass](https://sass-lang.com/guide) (CSS-Preprocessor)

[Foundation](https://get.foundation/index.html) (CSS-Framework)

[The-Strain-API](http://strains.evanbusse.com/index.html) (Third-Party-API)

[Personal-Remedies-API](https://nutridigm-api-dev.azurewebsites.net/swagger/ui/index) (Third-Party-API)

[Herbal-Commit-Tea](https://herbalcommittea.com/blog/5%20Herbs%20for%20Menstrual%20Cramps%20&%20Period%20Symptoms) (Web-Source)

[Garrow-Wellness-Center](https://garrowwellnesscenter.com/top-5-best-natural-muscle-relaxers/) (Web-Source)




### Deployed URL's:
<hr />

[GitHub-Repository](https://github.com/dmitriso/THme)

[THme-App](https://dmitriso.github.io/THme/)



