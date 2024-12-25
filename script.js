const { Anchor, Shape, Rect, Box, TAU } = Zdog;

const points = [
	{ x: 0, y: -3.5 },
	{ x: 0.04, y: -3.85 },
	{ x: 0.33, y: -4.79 },
	{ x: 1.04, y: -6.05 },
	{ x: 2.27, y: -7.28 },
	{ x: 3.95, y: -8.13 },
	{ x: 5.93, y: -8.33 },
	{ x: 7.92, y: -7.79 },
	{ x: 9.63, y: -6.56 },
	{ x: 10.79, y: -4.83 },
	{ x: 11.2, y: -2.8 },
	{ x: 10.79, y: -0.71 },
	{ x: 9.63, y: 1.32 },
	{ x: 7.92, y: 3.24 },
	{ x: 5.93, y: 5.03 },
	{ x: 3.95, y: 6.72 },
	{ x: 2.27, y: 8.3 },
	{ x: 1.04, y: 9.73 },
	{ x: 0.33, y: 10.87 },
	{ x: 0.04, y: 11.63 },
	{ x: 0, y: 11.89 },
	{ x: -0.05, y: 11.63 },
	{ x: -0.34, y: 10.87 },
	{ x: -1.05, y: 9.73 },
	{ x: -2.28, y: 8.3 },
	{ x: -3.96, y: 6.72 },
	{ x: -5.94, y: 5.03 },
	{ x: -7.93, y: 3.24 },
	{ x: -9.64, y: 1.32 },
	{ x: -10.8, y: -0.71 },
	{ x: -11.2, y: -2.8 },
	{ x: -10.8, y: -4.83 },
	{ x: -9.64, y: -6.56 },
	{ x: -7.93, y: -7.79 },
	{ x: -5.94, y: -8.33 },
	{ x: -3.96, y: -8.13 },
	{ x: -2.28, y: -7.28 },
	{ x: -1.05, y: -6.05 },
	{ x: -0.34, y: -4.79 },
	{ x: -0.05, y: -3.85 }
];

const lines = [
	[
		{ x: 3.75, y: -12.02 },
		{ x: 3.98, y: -12.74 }
	],
	[
		{ x: 9.78, y: -13.75 },
		{ x: 10.37, y: -14.58 }
	],
	[
		{ x: 15.89, y: -10.83 },
		{ x: 16.86, y: -11.48 }
	],
	[
		{ x: 18.47, y: -4.62 },
		{ x: 19.59, y: -4.91 }
	],
	[
		{ x: 15.89, y: 2.19 },
		{ x: 16.86, y: 2.32 }
	],
	[
		{ x: 9.78, y: 8.3 },
		{ x: 10.37, y: 8.8 }
	],
	[
		{ x: 3.75, y: 13.71 },
		{ x: 3.98, y: 14.54 }
	],
	[
		{ x: -3.76, y: 13.71 },
		{ x: -3.99, y: 14.54 }
	],
	[
		{ x: -9.79, y: 8.3 },
		{ x: -10.38, y: 8.8 }
	],
	[
		{ x: -15.9, y: 2.19 },
		{ x: -16.87, y: 2.32 }
	],
	[
		{ x: -18.48, y: -4.62 },
		{ x: -19.6, y: -4.9 }
	],
	[
		{ x: -15.9, y: -10.83 },
		{ x: -16.87, y: -11.48 }
	],
	[
		{ x: -9.79, y: -13.75 },
		{ x: -10.38, y: -14.58 }
	],
	[
		{ x: -3.76, y: -12.02 },
		{ x: -3.99, y: -12.74 }
	]
];

(() => {
	// Lista de nomes mapeados por número
	const listaNomes = {
		1: 'Otávio',
		2: 'Milenny',
		3: 'Graeff',
		4: 'Ana Maria',
		5: 'Mamis',
		6:'Cibely',
		7: 'Abias Maria',
		8: 'Ditador Comunista',
		9: 'Tay',

		default: 'Amigo(a)'
	};

	// Função para pegar o nome baseado no número da URL
	const getNomeFromURL = () => {
		const numero = window.location.search.replace('?', '');
		const nome = listaNomes[numero] || listaNomes.default;
		return nome;
	};

	// Atualizar mensagem com nome
	const updateMessage = () => {
		const nome = getNomeFromURL();
		const title = document.querySelector('.title');
		const subtitle = document.querySelector('.subtitle');
		
		title.innerHTML = `✨ ${nome}! ✨`;
		subtitle.innerHTML = `
			<span style="display: block; margin-bottom: 1.5rem; font-weight: 400; color: #2a1f35;">
				Que a magia desta noite especial traga luz para seus sonhos
				e alegria para seu coração.
			</span>
			<span style="display: block; margin-bottom: 1.5rem; color: #2a1f35;">
				Que o próximo ano seja repleto de momentos extraordinários
				e conquistas brilhantes!
			</span>
			<span style="font-weight: 700; color: #d4163b;">
				Com carinho e bênçãos natalinas,<br>
				✨ Feliz Natal e Um Ano Novo Incrível! ✨
			</span>
		`;
	};

	// Chamar função para atualizar mensagem
	updateMessage();

	const colors = {
		yellows: [
			"hsl(44 93% 57%)",
			"hsl(39 93% 57%)",
			"hsl(33 87% 55%)",
			"hsl(27 76% 52%)"
		],
		reds: [
			"hsl(354 84% 57%)",
			"hsl(354 80% 45%)",
			"hsl(354 75% 40%)",
			"hsl(354 70% 35%)"
		]
	};

	const strokes = [1, 2, 4];
	const [, stroke] = strokes;

	const size = 50;
	const excess = 5;

	const root = new Anchor();

	const side = new Rect({
		width: size,
		height: size,
		stroke,
		fill: true
	});

	const strip = new Rect({
		width: size + stroke,
		height: size / 10,
		stroke,
		fill: true
	});

	side.copy({
		addTo: root,
		color: colors.yellows[3],
		translate: {
			z: (size / 2) * -1
		}
	});

	side.copy({
		addTo: root,
		color: colors.yellows[2],
		translate: {
			x: (size / 2) * -1
		},
		rotate: {
			y: TAU / 4
		}
	});

	side.copy({
		addTo: root,
		color: colors.yellows[1],
		translate: {
			z: size / 2
		}
	});

	side.copy({
		addTo: root,
		color: colors.yellows[0],
		translate: {
			x: size / 2
		},
		rotate: {
			y: TAU / 4
		}
	});

	strip.copy({
		addTo: root,
		color: colors.reds[3],
		translate: {
			z: size / 2 + stroke
		}
	});

	strip.copy({
		addTo: root,
		color: colors.reds[2],
		translate: {
			x: size / 2 + stroke
		},
		rotate: {
			y: TAU / 4
		}
	});

	new Shape({
		addTo: root,
		color: colors.reds[3],
		stroke,
		fill: true,
		path: [
			{ x: 0, y: -5 },
			{
				bezier: [
					{ x: 7, y: -11 },
					{ x: 12, y: -10 },
					{ x: 18, y: -8 }
				]
			},
			{
				bezier: [
					{ x: 18, y: -2 },
					{ x: 19, y: -1 },
					{ x: 14, y: 5 }
				]
			},
			{
				bezier: [
					{ x: 7, y: 5 },
					{ x: 7, y: 5 },
					{ x: 0, y: 1 }
				]
			},
			{
				bezier: [
					{ x: 8, y: 10 },
					{ x: 8, y: 10 },
					{ x: 13, y: 13 }
				]
			},
			{
				bezier: [
					{ x: 8, y: 14 },
					{ x: 8, y: 14 },
					{ x: 6, y: 18 }
				]
			},
			{
				bezier: [
					{ x: 3, y: 12 },
					{ x: 3, y: 12 },
					{ x: 0, y: 3 }
				]
			},
			{
				bezier: [
					{ x: -3, y: 12 },
					{ x: -3, y: 12 },
					{ x: -6, y: 18 }
				]
			},
			{
				bezier: [
					{ x: -8, y: 14 },
					{ x: -8, y: 14 },
					{ x: -13, y: 13 }
				]
			},
			{
				bezier: [
					{ x: -8, y: 10 },
					{ x: -8, y: 10 },
					{ x: 0, y: 1 }
				]
			},
			{
				bezier: [
					{ x: -7, y: 5 },
					{ x: -7, y: 5 },
					{ x: -14, y: 5 }
				]
			},
			{
				bezier: [
					{ x: -19, y: -1 },
					{ x: -18, y: -2 },
					{ x: -18, y: -8 }
				]
			},
			{
				bezier: [
					{ x: -12, y: -10 },
					{ x: -7, y: -11 },
					{ x: 0, y: -5 }
				]
			}
		],
		translate: {
			z: size / 2 + stroke
		}
	});

	const lid = new Box({
		addTo: root,
		color: colors.reds[2],
		frontFace: colors.reds[3],
		leftFace: colors.reds[1],
		rightFace: colors.reds[1],
		width: strip.width + excess,
		height: strip.height + excess,
		depth: strip.width + excess,
		stroke,
		fill: true,
		translate: {
			y: (size / 2 + stroke) * -1
		}
	});

	const gift = new Anchor({
		addTo: root
	});

	new Shape({
		addTo: gift,
		color: colors.reds[0],
		fill: true,
		stroke: strokes[2],
		path: points
	});

	for (const path of lines) {
		new Shape({
			addTo: gift,
			color: colors.reds[0],
			stroke: strokes[0],
			path
		});
	}

	const element = document.querySelector("canvas");
	const { width, height } = element;
	const context = element.getContext("2d");
	const zoom = 3;

	context.lineCap = "round";
	context.lineJoin = "round";

	const render = () => {
		context.clearRect(0, 0, width, height);
		context.save();
		context.translate(width / 2, height / 2);
		context.scale(zoom, zoom);
		root.renderGraphCanvas(context);
		context.restore();
	};

	const animate = () => {
		const time = Date.now() * 0.0007; // Velocidade reduzida para movimento mais suave
		const value = (Math.sin(time) + 1) / 2; // Valor entre 0 e 1

		root.translate.y = (value * size) / 2;
		root.translate.x = ((value * size) / 2) * -1;

		root.rotate.x = value * 0.3 * -1;
		root.rotate.y = value * 0.3;

		lid.translate.x = (value * size * 3) / 2;
		lid.translate.z = (value * size) / 2;
		lid.rotate.z = value * 1.8;

		gift.translate.x = root.translate.x * -1;
		gift.translate.y = ((value * size * 5) / 4) * -1;
		gift.scale = value * 1.7;
		gift.rotate.y = value * (TAU * 2 - root.rotate.y);

		root.updateGraph();
		render();
		requestAnimationFrame(animate);
	};

	root.updateGraph();
	animate();
})();