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
			events: [
				{
					ID: 1,
					post_Description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "1st Event for Meetup 1",
					meta_keys: {
						day: "20180428",
						time: "07:00 AM",
						_groupId: 1
					}
				},
				{
					ID: 2,
					post_Description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "2nd Event for Meetup 1",
					meta_keys: {
						day: "20180430",
						time: "07:00 AM",
						_groupId: 1
					}
				},
				{
					ID: 3,
					post_Description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "1st Event for Meetup 2",
					meta_keys: {
						day: "20180517",
						time: "07:00 AM",
						_groupId: 2
					}
				},
				{
					ID: 4,
					post_Description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "3rd Event for Meetup 1",
					meta_keys: {
						day: "20180520",
						time: "07:00 AM",
						_groupId: 1
					}
				},
				{
					ID: 5,
					post_Description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "2nd Event for Meetup 2",
					meta_keys: {
						day: "20180530",
						time: "07:00 AM",
						_groupId: 2
					}
				}
			],
			groups: [
				{
					ID: 1,
					post_content: "Meetup 1",
					post_title: "Tech Enthusiasts Meetup 1",
					members: ["robert", "jjtime", "username2", "cheeselover", "neweradude", "james1996"]
				},
				{
					ID: 2,
					post_content: "Meetup 2",
					post_title: "Tech Enthusiasts Meetup 2",
					members: ["robert", "jjtime", "username2", "cheeselover", "neweradude", "james1996"]
				}
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
