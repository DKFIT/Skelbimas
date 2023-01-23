// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, ref, update, onValue, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { firebaseConfig } from "./firebase.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
let signup = document.getElementById("signup");
// new user register 


const modal = () => {
	const modalContainer = document.getElementById("modalcontainer");
	const mbutton = document.createElement("button");
	mbutton.setAttribute("type", "button");
	mbutton.setAttribute("id", "hidebutton");
	mbutton.setAttribute("class", "btn btn-primary");
	mbutton.setAttribute("data-bs-toggle", "modal");
	mbutton.setAttribute("data-bs-target", "#exampleModal");
	mbutton.innerText = "Open Modal"
	document.body.appendChild(mbutton); // Append the button to the HTML body

	const mdiv1 = document.createElement("div");
	mdiv1.className = "modal fade";
	mdiv1.setAttribute("id", "exampleModal");
	mdiv1.setAttribute("tabindex", "-1");
	mdiv1.setAttribute("aria-labelledby", "exampleModalLabel");
	mdiv1.setAttribute("aria-hidden", "true");
	modalContainer.appendChild(mdiv1);

	const mdiv2 = document.createElement("div");
	mdiv2.className = "modal-dialog";
	mdiv1.appendChild(mdiv2); // Append mdiv2 to mdiv1

	const mdiv3 = document.createElement("div");
	mdiv3.className = "modal-content";
	mdiv2.appendChild(mdiv3); // Append mdiv3 to mdiv2

	const mdiv4 = document.createElement("div");
	mdiv4.className = "modal-header";
	mdiv3.appendChild(mdiv4); // Append mdiv4 to mdiv3

	const mheader = document.createElement("h1");
	mheader.innerText = "Incorrect Details!";
	mheader.setAttribute("class", "modal-title fs-5");
	mheader.setAttribute("id", "exampleModalLabel");
	mdiv4.appendChild(mheader);

	const mb1 = document.createElement("button");
	mb1.setAttribute("type", "button");
	mb1.setAttribute("class", "btn-close");
	mb1.setAttribute("data-bs-dismiss", "modal");
	mb1.setAttribute("aria-label", "Close");
	mdiv4.appendChild(mb1);

	const mdiv5 = document.createElement("div");
	mdiv5.className = "modal-body";
	mdiv3.appendChild(mdiv5); // Append mdiv5 to mdiv3

	const mbody = document.createElement("h4");
	mbody.innerText = "Information provided does not match the database. Please make sure that information provided is correct or register new account.";
	mdiv5.appendChild(mbody);

	const mdiv6 = document.createElement("div");
	mdiv6.className = "modal-footer";
	mdiv3.appendChild(mdiv6); // Append mdiv6 to mdiv3

	const mb2 = document.createElement("button");
	document.getElementById("hidebutton").style.display = "none"
	const button = document.querySelector("#hidebutton");
	button.click();
	document.getElementById("hidebutton").remove();

}

// const removemodal = ( ) => {
// 	document.getElementById("hidebutton")
// }



const pradineforma = () => {

	let pforma = document.getElementById("loginforma")

	let rowdiv = document.createElement("div")
	rowdiv.className = "row";
	rowdiv.setAttribute('id', 'row');
	pforma.appendChild(rowdiv)

	let registerdiv = document.createElement("div")
	registerdiv.className = "col-6"
	rowdiv.appendChild(registerdiv)


	let rheader = document.createElement("header")
	rheader.innerText = "Register"
	registerdiv.appendChild(rheader);

	let ruserlogin = document.createElement("input")
	ruserlogin.className = "form-control m-1"
	ruserlogin.setAttribute('placeholder', 'Enter Username');
	ruserlogin.setAttribute('id', 'username');
	ruserlogin.setAttribute('type', 'username');
	registerdiv.appendChild(ruserlogin);


	let ruseremail = document.createElement("input")
	ruseremail.className = "form-control m-1"
	ruseremail.setAttribute('placeholder', 'Enter Email address');
	ruseremail.setAttribute('id', 'email');
	ruseremail.setAttribute('type', 'email');
	registerdiv.appendChild(ruseremail);

	let ruserpass = document.createElement("input")
	ruserpass.className = "form-control m-1"
	ruserpass.setAttribute('placeholder', 'Enter Password');
	ruserpass.setAttribute('id', 'pass');
	ruserpass.setAttribute('type', 'password');
	registerdiv.appendChild(ruserpass);

	let rusersignup = document.createElement("button")
	rusersignup.innerText = "Sign up"
	rusersignup.setAttribute('type', 'button');
	rusersignup.className = "btn btn-dark mt-3"
	rusersignup.setAttribute('id', 'signup');
	registerdiv.appendChild(rusersignup)

	let logindiv = document.createElement("div")
	logindiv.className = "col-6"
	rowdiv.appendChild(logindiv)


	let lheader = document.createElement("header")
	lheader.innerText = "Login"
	logindiv.appendChild(lheader);

	let luserlogin = document.createElement("input")
	luserlogin.className = "form-control m-1"
	luserlogin.setAttribute('placeholder', 'Enter Username');
	luserlogin.setAttribute('id', 'lusername');
	luserlogin.setAttribute('type', 'username');
	logindiv.appendChild(luserlogin);


	let luseremail = document.createElement("input")
	luseremail.className = "form-control m-1"
	luseremail.setAttribute('placeholder', 'Enter Email address');
	luseremail.setAttribute('id', 'lemail');
	luseremail.setAttribute('type', 'email');
	logindiv.appendChild(luseremail);

	let luserpass = document.createElement("input")
	luserpass.className = "form-control m-1"
	luserpass.setAttribute('placeholder', 'Enter Password');
	luserpass.setAttribute('id', 'lpass');
	luserpass.setAttribute('type', 'password');
	logindiv.appendChild(luserpass);

	let lusersignup = document.createElement("button")
	lusersignup.innerText = "login"
	lusersignup.setAttribute('type', 'button');
	lusersignup.className = "btn btn-dark mt-3"
	lusersignup.setAttribute('id', 'loginn');
	logindiv.appendChild(lusersignup)
}

let removepradineforma = () => {
	document.getElementById("row").remove();
}

const skelbimoforma = () => {
	const maindiv = document.getElementById('skelbimoforma');
	const container = document.createElement('div');
	container.className = 'container'
	container.setAttribute('id', 'skelbimocontainer');
	maindiv.appendChild(container);
	const row = document.createElement('div')
	row.className = 'row';
	container.appendChild(row);
	container.setAttribute('id', 'roww');

	const signOutt = document.createElement("button");
	signOutt.setAttribute('id', 'signOut');
	signOutt.innerText = 'logout'
	signOutt.className = 'material-symbols-outlined';
	row.appendChild(signOutt);

	const titlep = document.createElement('p')
	titlep.innerText = 'Title';
	const categoryp = document.createElement('p')
	categoryp.innerText = 'Category';
	const descp = document.createElement('p')
	descp.innerText = 'Description';
	const pricep = document.createElement('p')
	pricep.innerText = 'Price';
	const imgp = document.createElement('p')
	imgp.innerText = 'Image';

	const inputTitle = document.createElement('input');
	inputTitle.className = 'form-control m-1'
	inputTitle.setAttribute('id', 'it');
	const inputCategory = document.createElement('input');
	inputCategory.className = 'form-control m-1';
	inputCategory.setAttribute('id', 'ic');
	const inputDesc = document.createElement('input');
	inputDesc.className = 'form-control m-1';
	inputDesc.setAttribute('id', 'id');
	const inputPrice = document.createElement('input');
	inputPrice.className = 'form-control m-1';
	inputPrice.setAttribute('id', 'ip');
	const inputImg = document.createElement('input');
	inputImg.className = 'form-control m-1';
	inputImg.setAttribute('id', 'ii');
	const submit = document.createElement("button");

	submit.setAttribute('id', 'submit');
	submit.className = 'mt-5';
	submit.innerText = 'Submit';

	row.appendChild(titlep);
	row.appendChild(inputTitle);
	row.appendChild(categoryp);
	row.appendChild(inputCategory);
	row.appendChild(descp);
	row.appendChild(inputDesc);
	row.appendChild(pricep);
	row.appendChild(inputPrice);
	row.appendChild(imgp);
	row.appendChild(inputImg);
	row.appendChild(submit);
	// kurti lentele visu skelbimam

	// const table = document.createElement("table");
	// table.className = "table-hover mt-5 border border-dark"
	// table.setAttribute("id", "table")

	// // Create first row element
	// const tablerow1 = document.createElement("tr");


	// // Create 5 cells for the first row
	// const headers = ["Title", "Category", "Description", "Price", "Image"];

	// for (let i = 0; i < headers.length; i++) {
	// 	const cell = document.createElement("td");
	// 	cell.className = "border border-dark"
	// 	cell.innerHTML = headers[i];
	// 	tablerow1.appendChild(cell);
	// }

	// // Append first row to table

	// table.appendChild(tablerow1);



	// // Create second row element
	// const tablerow2 = document.createElement("tr");
	// tablerow2.className = "mt-3"
	// tablerow2.setAttribute("id", "table2row")

	// // Create 5 cells for the second row
	// for (let i = 6; i <= 10; i++) {
	// 	const cell = document.createElement("td");
	// 	cell.className = "border border-dark"
	// 	cell.innerHTML = " ";
	// 	tablerow2.appendChild(cell);
	// }

	// // Append second row to table
	// table.appendChild(tablerow2);

	// // Add table to the HTML document
	// row.appendChild(table);

}


let removeskelbimoforma = () => {
	document.getElementById("roww").remove();
}



const registerNewUser = () => {
	let email = document.getElementById("email").value;
	let pass = document.getElementById("pass").value;

	createUserWithEmailAndPassword(auth, email, pass)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			console.log("new user created!");
			removepradineforma();



			set(ref(database, "users/" + user.uid), {
				email: email,
				role: "simple_user",

			});
			console.log("labass")
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorMessage)
		});
}


const loginuser = () => {
	let lemail = document.getElementById("lemail").value;
	let lpass = document.getElementById("lpass").value;

	signInWithEmailAndPassword(auth, lemail, lpass)
		.then((userCredential) => {

			// let lusername = document.getElementById("lusername").value;
			// Signed in 
			const user = userCredential.user;
			const logintTime = new Date();

			update(ref(database, 'users/' + user.uid), {
				last_login: logintTime
			});
			console.log(user)

			console.log("logged in")
			removepradineforma()
		})
		.catch((error) => {

			const errorCode = error.code;
			const errorMessage = "Such account does not exist, please check your login details or register new account. Thank you!"
			modal()
			console.log(errorCode)
			// pradineforma()
			let resetauthelse = document.getElementById("row");
			resetauthelse = null;
			console.log(resetauthelse)


			// location.reload();


		})
};




const user = auth.currentUser;

// onAuthStateChanged(auth, (user) => {
// 	if (user) {
// 		// User is signed in, see docs for a list of available properties
// 		// https://firebase.google.com/docs/reference/js/firebase.User	  
// 		console.log("logged in")
// 		console.log(document.getElementById("row"))
// 		const uid = user.uid;

// 		if (document.getElementById("roww") == null) {
// 			console.log("logged in")
// 			skelbimoforma();
// 			document.getElementById("signOut").addEventListener("click", logout);
// 			document.getElementById("signOut").addEventListener("click", removeskelbimoforma);
// 			document.getElementById("submit").addEventListener("click", () => insertData(uid));
// 			getInfo();
// 		}
// 	} else {

// 		console.log(document.getElementById("row"))

// 		if (document.getElementById("row") == null) {
// 			pradineforma();
// 			console.log(document.getElementById("roww"))
// 			document.getElementById("row").style.display = "flex"
// 			console.log("logged off")
// 			document.getElementById("signup").addEventListener("click", registerNewUser)
// 			console.log(document.getElementById("row"))
// 			document.getElementById("loginn").addEventListener("click", loginuser);
// 			document.getElementById("loginn").addEventListener("click", removepradineforma);
// 		}
// 	}
// });
onAuthStateChanged(auth, (user) => {
	if (user) {
		console.log("logged in");
		const uid = user.uid;
		skelbimoforma();
		document.getElementById("signOut").onclick = logout;
		document.getElementById("signOut").addEventListener("click", removeskelbimoforma)
		document.getElementById("submit").onclick = () => insertData(uid);
		getInfo(uid);

	} else {

		console.log("logged off");
		pradineforma();
		document.getElementById("signup").onclick = registerNewUser;
		document.getElementById("loginn").onclick = loginuser;
	}
});




const logout = () => {
	signOut(auth).then(() => {
		// Sign-out successful.
		console.log("atsijunge")
	}).catch((error) => {
		console.log("neatsijunge")
		// An error happened.
	})
};

//kurti skelbima



const getInfo = (uid) => {
	const db = getDatabase();
	console.log(uid)
	onValue(ref(db, "ads/" + user), (snapshot) => {
		let ads = snapshot.val();
		if (!ads) {
			console.log('ggg')
			return false;
		} else {
			const table = htmlElements(`<div id="tableCont" class="table_container">
                                            <table id="adsTable">
                                                
                                            </table>
                                        </div>`)
		}
		// Clear the table before populating it with new data
		let table = document.getElementById("adsTable");

		// Create table header
		let headerRow = table.createTHead().insertRow();
		let titleHeader = headerRow.insertCell();
		let categoryHeader = headerRow.insertCell(1);
		let descriptionHeader = headerRow.insertCell(2);
		let priceHeader = headerRow.insertCell(3);
		let imagesHeader = headerRow.insertCell(4);

		titleHeader.innerHTML = "Title";
		categoryHeader.innerHTML = "Category";
		descriptionHeader.innerHTML = "Description";
		priceHeader.innerHTML = "Price";
		imagesHeader.innerHTML = "Images";


		// Iterate through the ads object and add each ad to the table
		for (let key in ads) {
			let ad = ads[key];
			let row = table.insertRow();
			let titleCell = row.insertCell(0);
			let categoryCell = row.insertCell(1);
			let descriptionCell = row.insertCell(2);
			let priceCell = row.insertCell(3);
			let imagesCell = row.insertCell(4);

			titleCell.innerHTML = ad.title;
			// categoryCell.innerHTML = ad.category;
			descriptionCell.innerHTML = ad.description;
			priceCell.innerHTML = ad.price;
			imagesCell.innerHTML = ad.images;
		}
	})
}


function insertData(uid) {
	console.log(uid)
	const db = getDatabase();
	console.log("labas")
	let inputTitle = document.getElementById("it");
	let inputCategory = document.getElementById("ic");
	let inputDesc = document.getElementById("id");
	let inputPrice = document.getElementById("ip");
	let inputImg = document.getElementById("ii");
	// set(ref(db, uid + 'users/Products/' ), {
	push(ref(db, 'users/' + uid + "/products/"), {
		Title: inputTitle.value,
		Category: inputCategory.value,
		Description: inputDesc.value,
		Price: inputPrice.value + "E",
		Image: inputImg.value
	})
		.then(() => {
			alert("Added success");
		})
		.catch((error) => {
			alert(error);
		})
}

function htmlElements(html) {
	const main = document.createElement("template");
	main.innerHTML = html.trim();
	document.body.append(main.content.firstElementChild);
}

