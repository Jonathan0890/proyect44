import React from "react";
import axios from "axios";
import { Formik } from "formik";

export default function Formul() {
	return (
		<div>
			<Formik
				initialValues={{
					username: "",
					password: "",
				}}
				onSubmit={async (values, actions) => {
					console.log(values);

					try {
						// Cambia la URL a la que deseas enviar los datos
						const res = await axios.post('http://localhost:3000/users', values);
						console.log(res.data); // Puedes mostrar la respuesta en la consola

						actions.resetForm();
						alert('Datos agregados correctamente');
						// Evita usar window.location para redireccionar, usa el enrutamiento de React en su lugar
						// Tu aplicación debe estar configurada para manejar el enrutamiento.
					} catch (error) {
						console.error(error);
					}
				}}
			>
				{({ handleChange, handleSubmit, values }) => (
					<form className="w-full max-w-lg" onSubmit={handleSubmit}>
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
									Username
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-username"
									type="text"
									placeholder=""
									name="username" // Cambia a minúsculas para que coincida con initialValues
									onChange={handleChange}
									value={values.username}
								/>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
									Contraseña
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-password"
									type="password"
									placeholder=""
									name="password" // Cambia a minúsculas para que coincida con initialValues
									onChange={handleChange}
									value={values.password}
								/>
							</div>
						</div>
						<br />
						<button className="bg-transparent hover:bg-gray-400 text-gray-700 font-semibold hover:text-white py-0 px-4 border border-gray-700 hover:border-transparent rounded" type="submit">
							Agregar
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
}
