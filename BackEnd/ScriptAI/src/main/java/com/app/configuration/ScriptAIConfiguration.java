package com.app.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class ScriptAIConfiguration {
	
	 @Value("${openai.api.key}")
     String openaiApiKey;

	    @Bean
	    public RestTemplate template(){
//	    	System.out.println(openaiApiKey);
	        RestTemplate restTemplate=new RestTemplate();
	        restTemplate.getInterceptors().add((request, body, execution) -> {
	            request.getHeaders().add("Authorization", "Bearer " + openaiApiKey);
//	            request.getHeaders().add("Authorization", "Bearer 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");
	            return execution.execute(request, body);
	        });
	        return restTemplate;
	    }
	
//	@Bean
//	public RestTemplate restTemplate() {
//		RestTemplate rTemplate = new RestTemplate();
//		rTemplate.getInterceptors().add((request, body, execution)->{
//			request.getHeaders().add("Authorization", "Bearer "+"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");
//			return execution.execute(request, body);
//		});
//		return rTemplate;
//	}
	

	
}
