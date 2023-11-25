const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [
			
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			deleteContact: (indexToDelete) => {
				const store = getStore();
				// console.log ("deleteContact")
				// console.log("eliminar" + indexToDelete) 
				// console.log (store.contacts.filter ( (item,index) => index!= indexToDelete))
				setStore({ contacts: store.contacts.filter ( (item,index) => index!= indexToDelete) });

				var requestOptions = {
					method: 'DELETE',
					redirect: 'follow'
				  };
				  
				  fetch("https://playground.4geeks.com/apis/fake/contact/" + indexToDelete, requestOptions)
					.then(response => response.text())
					.then(result => {
						//console.log(result)
						fetch ("https://playground.4geeks.com/apis/fake/contact/agenda/whatever")
						.then ( (response) => response.json())
						.then ( (data)=> setStore ({ contacts: data }))})
						.catch(error => console.log('error', error));
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch ("https://playground.4geeks.com/apis/fake/contact/agenda/whatever")
				.then ( (response) => response.json())
				.then ( (data)=> setStore ({ contacts: data }))
			},

		
		}
	};
};

export default getState;
