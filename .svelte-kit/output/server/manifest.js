export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/intro-image1.png","images/pipeline-image1-es.png","images/pipeline-image1-mobile-es.png","images/pipeline-image1-mobile.png","images/pipeline-image1.png","images/stack-image-icon11.png","images/stack-image-icon12.png","images/stack-image-icon13.png","images/stack-image-icon14.png","images/stack-image-icon21.png","images/stack-image-icon22.png","images/stack-image-icon23.png","images/stack-image-icon24.png","images/stack-image-icon25.png","images/stack-image-icon26.png","images/stack-image-icon27.png","images/stack-image-icon28.png","images/stack-image-icon31.png","images/stack-image-icon32.png","images/stack-image-icon33.png","images/stack-image-icon34.png","images/stack-image-icon35.png","images/stack-image-icon36.png","images/stack-image-icon37.png","images/stack-image-icon38.png","images/virtual_reality_ development_agency_orbisnauta_logo.png","images/virtual_reality_ development_agency_orbisnauta_logo_verysmall.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-98280cb9.js","js":["start-98280cb9.js","chunks/index-44d02d43.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "contact_es@esp",
				pattern: /^\/contact_es\/?$/,
				names: [],
				types: [],
				path: "/contact_es",
				shadow: null,
				a: [4,5],
				b: [1]
			},
			{
				type: 'page',
				id: "es@esp",
				pattern: /^\/es\/?$/,
				names: [],
				types: [],
				path: "/es",
				shadow: null,
				a: [4,6],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
