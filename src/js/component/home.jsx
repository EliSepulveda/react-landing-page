import React from "react";
import NavBar from "./navBar"
import Jumbotron from "./jumbotron";
import BootStrapCard from "./card";

const navBarItems = [
	(
		<li class="nav-item">
			<a class="nav-link" href="#">Home</a>
		</li>
	),
	(
		<li class="nav-item">
			<a class="nav-link" href="#">About</a>
		</li>
	),
	(
		<li class="nav-item">
			<a class="nav-link" href="#">Services</a>
		</li>
	),
	(
		<li class="nav-item">
			<a class="nav-link" href="#">Contact</a>
		</li>
	)
]

const cardsItems = [
	{
		imageUrl: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
		title: "Card Title 1",
		description: "Lorem ipsum dolor sit amet, consectetur adinisicing elit Eynlicabo magni sapiente, tempore debitis beatae culpa natus architecto",
		buttonUrl: "#",
		buttonLabel: "Find Out More!"
	},
	{
		imageUrl: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
		title: "Card Title 2",
		description: "Lorem ipsum dolor sit amet, consectetur adinisicing elit Eynlicabo magni sapiente, tempore debitis beatae culpa natus architecto",
		buttonUrl: "#",
		buttonLabel: "Find Out More!"
	},
	{
		imageUrl: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
		title: "Card Title 3",
		description: "Lorem ipsum dolor sit amet, consectetur adinisicing elit Eynlicabo magni sapiente, tempore debitis beatae culpa natus architecto",
		buttonUrl: "#",
		buttonLabel: "Find Out More!"
	},
	{
		imageUrl: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
		title: "Card Title 4",
		description: "Lorem ipsum dolor sit amet, consectetur adinisicing elit Eynlicabo magni sapiente, tempore debitis beatae culpa natus architecto",
		buttonUrl: "#",
		buttonLabel: "Find Out More!"
	}
]
//create your first component
const Home = () => {
	return (
		<>
			<NavBar navBarItems={navBarItems} />
			<div className="container">
				<Jumbotron />
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
					{cardsItems.map((card, index) => (
						<div className="col" key={index}>
							<BootStrapCard 
								imageUrl={card.imageUrl} 
								title={card.title} 
								description={card.description} 
								buttonUrl={card.buttonUrl} 
								buttonLabel={card.buttonLabel} 
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
