export const PROMPT = `
te llegara como INFO: las nuevas sugerencias que debes crear de platos para esa categoria.
te llegara como DATA: los platos que estan actualmente en el menu de mi restaurante.
deberas generar 4 sugerencias de nuevos platos que no esten en el menu que deberan tener un titulo, una descripcion y que tengan un valor sugerido.


la respuesta debe ser en formato JSON 
ej:
{
    "informacion": "Se realizo la llamda a la API"
    "sugerencias":[
        {
            titulo: "MARGHERITA",
            precio: "€10,50",
            descripcion:
			"Pizza clásica italiana con tomate fresco, mozzarella, albahaca y aceite de oliva.",
            }
            ]
}

 en el caso que en INFO: llegue otra pregunta que no sea sobre sujerencias de menu deberas responder de la siguiente manera:
{
    "informacion": "No puedo contestar a esa pregunta, prueba con otra cosa"
}


deberas asegurarte que el JSON devuelto este siempre completo

`;
/* export const PROMPT = `Te pasare una informacion la cual recibiras como INFO:, y recibiras una informacion en donde deberas buscar
                la informacion que se llamara DATA: , solamente debes contestar y buscar informacion en ese archivo,
                no puedes responder nada mas fuera de ello. tu actuaras como un recomendador de sugerencias
                de platos de comida. no permitas que te pregunten otro tipo de cosas , de ser asi pide y explica lo que haces
                hasta que te pidan solamente informacion que puedas obtener de DATA. si te preguntan sobre otra cosa, debes 
                responder simplemente "No puedo contestar a esa pregunta, que quieres comer?" `; */

export const DATA = [
	{
		titulo: "MARGHERITA",
		precio: "€10,50",
		traduccion: "PIZZA MARGARITA",
		descripcion:
			"Pizza clásica italiana con tomate fresco, mozzarella, albahaca y aceite de oliva.",
	},
	{
		titulo: "PEPPERONI",
		precio: "€12,00",
		traduccion: "PIZZA DE PEPPERONI",
		descripcion:
			"Pizza con salsa de tomate, mozzarella, y una generosa cantidad de pepperoni crujiente.",
	},
	{
		titulo: "QUATTRO FORMAGGI",
		precio: "€13,50",
		traduccion: "PIZZA CUATRO QUESOS",
		descripcion:
			"Pizza con una mezcla de cuatro quesos: mozzarella, gorgonzola, parmesano y fontina.",
	},
	{
		titulo: "HAWAIANA",
		precio: "€11,50",
		traduccion: "PIZZA HAWAIANA",
		descripcion:
			"Pizza con jamón, piña, mozzarella y una base de salsa de tomate.",
	},
	{
		titulo: "VEGGIE DELIGHT",
		precio: "€12,50",
		traduccion: "PIZZA VEGETARIANA",
		descripcion:
			"Pizza con una variedad de verduras frescas: pimientos, champiñones, cebolla, aceitunas y espinaca.",
	},
	{
		titulo: "CLASSIC BURGER",
		precio: "€9,90",
		traduccion: "HAMBURGUESA CLÁSICA",
		descripcion:
			"Hamburguesa clásica con carne de res, lechuga, tomate, cebolla, queso cheddar y salsa especial.",
	},
	{
		titulo: "BBQ BACON BURGER",
		precio: "€11,90",
		traduccion: "HAMBURGUESA CON BACON Y BBQ",
		descripcion:
			"Hamburguesa con carne de res, bacon crujiente, queso cheddar, cebolla caramelizada y salsa BBQ.",
	},
	{
		titulo: "DOUBLE CHEESEBURGER",
		precio: "€12,50",
		traduccion: "DOBLE HAMBURGUESA CON QUESO",
		descripcion:
			"Hamburguesa con doble carne de res, doble queso cheddar, lechuga, tomate y cebolla.",
	},
	{
		titulo: "MEXICAN BURGER",
		precio: "€11,50",
		traduccion: "HAMBURGUESA MEXICANA",
		descripcion:
			"Hamburguesa con guacamole, jalapeños, queso cheddar, tomate, lechuga y una salsa picante especial.",
	},
	{
		titulo: "CHICKEN SUPREME BURGER",
		precio: "€10,90",
		traduccion: "HAMBURGUESA SUPREMA DE POLLO",
		descripcion:
			"Hamburguesa de pechuga de pollo a la parrilla, lechuga, tomate, queso suizo y mayonesa de ajo.",
	},
];
