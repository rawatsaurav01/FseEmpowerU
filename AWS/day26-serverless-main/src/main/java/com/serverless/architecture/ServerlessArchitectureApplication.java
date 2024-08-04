package com.serverless.architecture;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.dynamodb.model.*;
import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class ServerlessArchitectureApplication implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {
	private final DynamoDbClient dynamoDbClient = DynamoDbClient.builder().build();
	private final String tableName = "Task-day26-nazim";
	@Override
	public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context) {
		String httpMethod = request.getHttpMethod();
		switch (httpMethod) {
			case "GET":
				return handleGet(request);
			case "POST":
				return handlePost(request);
			case "PUT":
				return handlePut(request);
			case "DELETE":
				return handleDelete(request);
			default:
				return new APIGatewayProxyResponseEvent()
						.withStatusCode(400)
						.withBody("Unsupported HTTP method");
		}
	}
	private APIGatewayProxyResponseEvent handleGet(APIGatewayProxyRequestEvent request) {
		String id = request.getPathParameters().get("id");
		GetItemResponse getItemResponse = dynamoDbClient.getItem(GetItemRequest.builder()
				.tableName(tableName)
				.key(Map.of("id", AttributeValue.builder().s(id).build()))
				.build());
		Map<String, AttributeValue> item = getItemResponse.item();
		if (item != null && !item.isEmpty()) {
			return new APIGatewayProxyResponseEvent()
					.withStatusCode(200)
					.withBody(item.toString());
		} else {
			return new APIGatewayProxyResponseEvent()
					.withStatusCode(404)
					.withBody("Item not found");
		}
	}
	private APIGatewayProxyResponseEvent handlePost(APIGatewayProxyRequestEvent request) {
		Map<String, AttributeValue> item = new HashMap<>();
		item.put("id", AttributeValue.builder().s(request.getPathParameters().get("id")).build());
		item.put("data", AttributeValue.builder().s(request.getBody()).build());
		dynamoDbClient.putItem(PutItemRequest.builder()
				.tableName(tableName)
				.item(item)
				.build());
		return new APIGatewayProxyResponseEvent()
				.withStatusCode(201)
				.withBody("Item created");
	}
	private APIGatewayProxyResponseEvent handlePut(APIGatewayProxyRequestEvent request) {
		String id = request.getPathParameters().get("id");
		Map<String, AttributeValueUpdate> updateValues = new HashMap<>();
		updateValues.put("data", AttributeValueUpdate.builder()
				.value(AttributeValue.builder().s(request.getBody()).build())
				.action(AttributeAction.PUT)
				.build());
		dynamoDbClient.updateItem(UpdateItemRequest.builder()
				.tableName(tableName)
				.key(Map.of("id", AttributeValue.builder().s(id).build()))
				.attributeUpdates(updateValues)
				.build());
		return new APIGatewayProxyResponseEvent()
				.withStatusCode(200)
				.withBody("Item updated");
	}
	private APIGatewayProxyResponseEvent handleDelete(APIGatewayProxyRequestEvent request) {
		String id = request.getPathParameters().get("id");
		dynamoDbClient.deleteItem(DeleteItemRequest.builder()
				.tableName(tableName)
				.key(Map.of("id", AttributeValue.builder().s(id).build()))
				.build());
		return new APIGatewayProxyResponseEvent()
				.withStatusCode(200)
				.withBody("Item deleted");
	}


//	public static void main(String[] args) {
//		SpringApplication.run(ServerlessArchitectureApplication.class, args);
//	}
}
