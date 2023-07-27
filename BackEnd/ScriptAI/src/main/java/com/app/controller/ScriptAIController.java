package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.app.dtoclasses.ChatGPTRequest;
import com.app.dtoclasses.ChatGptResponse;

@RestController
@RequestMapping("/bot")
public class ScriptAIController {

//	private String model;
//	private String url;
	
	@Value("${openai.model}")
    private String model;

    @Value(("${openai.api.url}"))
    private String apiURL;
    
	    @Autowired
	    private RestTemplate template;

	    @GetMapping("/chat")
	    public String chat(@RequestParam("prompt") String prompt){
	    	System.out.println(prompt);
	        ChatGPTRequest request=new ChatGPTRequest(model, prompt);
	        ChatGptResponse chatGptResponse = template.postForObject(apiURL, request, ChatGptResponse.class);
	        System.out.println(chatGptResponse.getChoices().get(0).getMessage().getContent());
	        return chatGptResponse.getChoices().get(0).getMessage().getContent();
	    }
	
//	@GetMapping("/scriptAi")
//	public String scriptAi(@RequestParam("prompt") String prompt) {
////		System.out.println(prompt);
//		ScriptAIRequestClass req = new ScriptAIRequestClass("gpt-3.5-turbo", prompt);
//		ScriptAIResponseClass resp = restTemplate.postForObject("https://api.openai.com/v1/scriptAi/completions", req, ScriptAIResponseClass.class);
////		List<Opts> opts = resp.getOpts();
//		System.out.println("Hii");
////		return resp.getOpts().get(0).getMsgs().getPrompt();
//		return "hii";
//	}
	
//	@GetMapping("/chat")
//    public String chat(@RequestParam("prompt") String prompt){
//    	System.out.println(prompt);
//    	ScriptAIRequestClass request=new ScriptAIRequestClass(model, prompt);
//    	ScriptAIResponseClass chatGptResponse = restTemplate.postForObject(apiURL, request, ScriptAIResponseClass.class);
////        System.out.println(chatGptResponse.getChoices().get(0).getMessage().getContent());
//        return chatGptResponse.getChoices().get(0).getMessage().getPrompt();
//    }
	
}
