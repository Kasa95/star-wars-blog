const getState = ({ getStore, getActions, setStore }) => {https://swapi.tech/api/people
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
			people: [],
			planets: [],
			starships: [],
			onePeople: [],
			favorites: [
				"Luke", "C3PO", "Hoth", "Death Star"
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getOnePeople: (theid) => {
				fetch("https://swapi.tech/api/people/"+theid)
				.then((response=>response.json()))
				.then((data => setStore({onePeople: data.result})))
			},

			addFavorite: () => {
				const store = getStore()
				setStore({ favorites: [...store.favorites, "newFav"] })
			},

			getPeople: () => {
				fetch("https://swapi.dev/api/people")
				.then((response)=>response.json())
				.then(data => setStore({people: data.results}))
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets")
				.then((response)=>response.json())
				.then(data => setStore({planets: data.results}))
			},
			getStarships: () => {
				fetch("https://swapi.dev/api/starships")
				.then((response)=>response.json())
				.then(data => setStore({starships: data.results}))
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
