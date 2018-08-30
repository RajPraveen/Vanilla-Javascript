/* var menuObject = {

    "Guide": "guideContent",

    "Getting Started": {

        "Setting up your Account": "accountContent",

        "Configure your Account in 3 Simple Steps": {

            "Add Primary email": "emailContent",

            "Add Users": "userContent",

            "Rebrand Your Account": "brandContent",

		}
	},

	"Started": {

		"Setting up your Account": "accountContent",

		"Configure your Account in 3 Simple Steps": {

			"Add Primary email": "emailContent",

			"Add Users": "userContent",

			"Rebrand Your Account": "brandContent",

		}

    }

};

 

var descriptionObject = {

    "guideContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    "accountContent": "Non odio euismod lacinia at. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sed adipiscing diam donec adipiscing tristique risus.",

    "emailContent": "Viverra mauris in aliquam sem fringilla ut morbi. Duis ultricies lacus sed turpis. Magna eget est lorem ipsum dolor sit amet consectetur. ",

    "userContent": "Arcu vitae elementum curabitur vitae. Volutpat blandit aliquam etiam erat. Dolor morbi non arcu risus quis varius quam.",

    "brandContent": "Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla."

};

let titleContainer = document.querySelector('.title-container');
let displayContainer = document.querySelector('.display-container');
let mainDisplay = document.querySelector('.main-display');
let button = document.querySelector('button');
button.addEventListener('click',(e) => {
	let childNodes = document.querySelectorAll('.child');
	if(e.target.innerText === "collapse") {
		e.target.innerText = "expand";
		childNodes.forEach(value => {
		value.style.display = "none";
		
	})
	} 
	else {
		e.target.innerText = "collapse";
		childNodes.forEach(value => {
		value.style.display = "block";
		
	})
	}
	
});


function createTempParent(obj,key) {

	let tempParent = document.createElement('div');
	let span = document.createElement('p');
	isInnerChild = true;
	span.innerText = key;
	tempParent.appendChild(span);
	tempParent.appendChild(evaluateObjectChain(obj));
	tempParent.className = "parent";
	tempParent.style.marginLeft = '20px';
	return tempParent;
}

function createTempChildren(obj,key) {

	let childNode = document.createElement('p');
	childNode.innerText = key;
	childNode.id = obj;
	childNode.className = isInnerChild ? 'child' : 'firstChild';
	childNode.style.marginLeft = '20px';
	childNode.addEventListener('click', (e) => {
		mainDisplay.innerText = descriptionObject[e.target.id];
	});
	return childNode;
}

let isInnerChild = false;
function evaluateObjectChain(obj) {
		let parent = document.createElement('div');

		for(let key in obj) 
			if(typeof obj[key] !== 'string')
				parent.appendChild(createTempParent(obj[key],key));
			else 
				parent.appendChild(createTempChildren(obj[key],key));
		
		return parent;
}

var result = evaluateObjectChain(menuObject);
titleContainer.appendChild(result);

 */

 function Parent() {
	console.log(this);
	
 }

var me = {
	name: "RAJ"
}

 Parent.call(new Parent());

 //console.log(obj.name);
 
