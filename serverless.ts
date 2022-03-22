import { AWS } from '@serverless/typescript';

const config: AWS = {
	org: 'cannabizmedia',
	console: true,
	service: 'aws-node-http-api-project',
	frameworkVersion: '3',
	plugins: [
		'serverless-esbuild',
		'serverless-prune-plugin',
		'serverless-domain-manager',
		'serverless-offline',
	],
	provider: {
		name: 'aws',
		runtime: 'nodejs14.x',
	},
	functions: {
		hello: {
			handler: 'handler.hello',
			events: [{
				httpApi: {
					path: '/',
					method: 'get',
				},
			}],
		},
	},
};

module.exports = config;