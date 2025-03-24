import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

class Handler {
  public async healthcheck(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        message: 'Ok'
      })
    };
  }
}

const handler = new Handler();
export const healthcheck = handler.healthcheck;