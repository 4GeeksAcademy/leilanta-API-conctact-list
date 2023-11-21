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
				{
					full_name: "Leilani Tanimoto",
					address: "basfjasjs",
					phone: "5364545456",
					email: "leilani@blabla.com",
					
				},
				{
					full_name: "Leilani Tanimoto",
					address: "basfjasjs",
					phone: "5364545456",
					email: "leilani@blabla.com",
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			deleteContact: (indexToDelete) => {
				const store = getStore();
				console.log ("deleteContact")
				console.log("eliminar" + indexToDelete) 
				console.log (store.contacts.filter ( (item,index) => index!= indexToDelete))
				setStore({ contacts: store.contacts.filter ( (item,index) => index!= indexToDelete) });
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
