import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	function eliminar (indexToDelete){
		console.log("eliminar" + indexToDelete) 
		console.log (store.contacts.filter ( (item,index) => index!= indexToDelete))
	}

	return (
		<div className="container">
			<ul className="list-group">
				
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
						<button className= "btn btn-light" onClick={() => actions.deleteContact(item.id)}>Eliminar</button>
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
