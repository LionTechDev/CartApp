import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { ErrorAlert } from "@/components/ErrorAlert";
import { createStore, updateStore } from "../actions/actions";
import { getStores } from "../services/services";

const AccountStore = async () => {
	const { stores, error } = await getStores();

	const {
		name = "",
		address = "",
		phone = "",
		email = "",
		country = "",
		city = "",
		state = "",
		image = "",
		zipcode = "",
		schedule = "",
		store_email = "",
		lang = [],
		currency = [],
		store_id = "",
	} = stores?.[0] || {};

	return (
		<section className="space-y-8">
			<h2 className="text-xl font-semibold text-gray-800 mb-4">
				Información del Establecimiento
			</h2>
			{error && <ErrorAlert message={error?.message} />}

			{!error && (
				<form>
					<div className="flex items-center justify-center h-40 bg-white border border-gray-200 rounded-lg mb-6">
						<Button
							variant="outline"
							className="text-gray-500 hover:bg-gray-50"
						>
							<Upload className="mr-2 h-4 w-4" /> Cargar Imagen
						</Button>
					</div>
					<div className="grid gap-6 md:grid-cols-2 mb-6">
						{stores?.length > 0 && (
							<Input
								className="hidden"
								name="store_id"
								defaultValue={store_id}
							/>
						)}
						<Input
							placeholder="Nombre del establecimiento"
							className="bg-white border-gray-200"
							name="name"
							defaultValue={name}
						/>
						<Input
							placeholder="Teléfono"
							className="bg-white border-gray-200"
							name="phone"
							defaultValue={phone}
						/>
						<Input
							placeholder="Correo electrónico"
							className="bg-white border-gray-200"
							defaultValue={store_email}
							type="email"
							name="store_email"
						/>
						<Input
							placeholder="País"
							className="bg-white border-gray-200"
							defaultValue={country}
							name="country"
						/>
						<Input
							placeholder="Provincia"
							className="bg-white border-gray-200"
							defaultValue={state}
							name="state"
						/>
						<Input
							placeholder="Ciudad"
							className="bg-white border-gray-200"
							defaultValue={city}
							name="city"
						/>
						<Input
							placeholder="Dirección"
							className="bg-white border-gray-200"
							defaultValue={address}
							name="address"
						/>
						<Input
							placeholder="Código postal"
							className="bg-white border-gray-200"
							defaultValue={zipcode}
							name="zipcode"
							type="zipcode"
						/>
					</div>
					<div className="flex justify-end">
						{stores?.length === 0 && (
							<Button
								className="bg-gray-500 hover:bg-gray-600 text-white"
								formAction={createStore}
							>
								Crear establecimiento
							</Button>
						)}
						{stores?.length > 0 && (
							<Button
								className="bg-gray-500 hover:bg-gray-600 text-white"
								formAction={updateStore}
							>
								Actualizar
							</Button>
						)}
					</div>
				</form>
			)}
		</section>
	);
};

export default AccountStore;
