import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	function eliminar (indexToDelete){
		console.log("eliminar" + indexToDelete) 
		console.log (store.contacts.filter ( (item,index) => index!= indexToDelete))
	}

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
				{store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							>
								<img src={rigoImage} />
								{ item.full_name }
								<br />
								{ item.address }
								<br />
								{ item.phone }
								<br />
								{ item.email }
						<button className= "btn btn-light" onClick={() => actions.deleteContact(index)}>Eliminar</button>
						<button className= "btn btn-light" onClick={() => actions.editContact(index)}>Editar</button>
						
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};