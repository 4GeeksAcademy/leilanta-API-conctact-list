import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Card = () => {


						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							>
								{ item.full_name }
								{ item.address }
								{ item.phone }
								{ item.email }
						<button onClick={() => actions.deleteContact(index)}>Eliminar</button>
						
						</li>

