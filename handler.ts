/**
 * Default Handler 
 * @param event API Gateway Proxy Event
 * @returns API Gateway Response
 */
export async function hello(event: any) {
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: "Go Serverless v3.0! Your function executed successfully!",
				input: event,
			},
			null,
			2
		),
	};
};
