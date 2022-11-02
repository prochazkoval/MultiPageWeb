# Multi Page Web "SweetDeer"
This Multi Page Website with cake recipes was created using React.js, HTML and CSS. Webpage has main "home" page and three themed sites "overviews" (cakes, christmas and other). This is my first attemp to web using React.js. All sites are connected with links. 
 
![Welcome site](https://github.com/prochazkoval/MultiPageWeb/blob/main/home_page.png?raw=true)
![Christmas site](https://github.com/prochazkoval/MultiPageWeb/blob/main/christmas_overview.png?raw=true)

All data are stored in data.js file. This file contains data in XML but has different file extension. Data in this file are: name of recipe, images paths, short description, process, advices... There are QR codes to make web more interactive on desctop version to load recipe easily on phone.

Example of XML recipe:
```
{
	name: "name_of_recipe",
	id: "link_name",
	image: "link_to_image_in_overview",
	image_detail: ["list_of_images_in_detail"],
	description: "thrilling_description",
	specingred: "not_common_ingred_shown_in_overview",
        ingred: "list_of_all_ingrediences", #this part is divided into two for cake recipe (corpus and filling)
	process: ["step_by_step_description"],
	qr: "link_to_qr_code_of_recipe", #only visioble on desctop to load recipe easily on phone 
	column: "one_col", #info for photos to make only one column of images or more
	advice: "own_experiences and hacks",
},
```

Each recipe has its own page with image and details. All recipes has images but not all has text filled in.

![Recipe detail](https://github.com/prochazkoval/MultiPageWeb/blob/main/recipe_detail.png?raw=true)

Mobile phone version of recipe detail.

![Recipe detail mobile](https://github.com/prochazkoval/MultiPageWeb/blob/main/recipe_detail_phone.png?raw=true)

This whole webpage is not finished yet. Some parts may not be perfectly responsive.

---

To run this project open CMD and type command "npm start".

This page is in Czech language. Name connect two my favorite things - sweets and deers (raindeers, mosses, ...). Entered text content is my own, may not make sence. I have created all images and illustrations. Photos were taken from 2019 to nowdays and all illustrations were created using Inkscape.
