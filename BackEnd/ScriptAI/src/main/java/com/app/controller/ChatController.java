package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.app.Entity.Prompt;
import com.app.dtoclasses.ChatRequest;
import com.app.dtoclasses.ChatResponse;
import com.app.dtoclasses.Message;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin("*")
public class ChatController {
    @Qualifier("openaiRestTemplate")
    @Autowired
    private RestTemplate restTemplate;
    @Value("${openai.model}")
    private String model;
    @Value("${openai.api.url}")
    private String apiUrl;
    
    @PostMapping("/chat")
    public Prompt chat(@RequestBody Prompt prompt , HttpSession session) {
        // create a request
    	
    	List<Message> chatHistory = (List<Message>) session.getAttribute("chatHistory" );
        if (chatHistory == null) {
             chatHistory = new ArrayList<>();
        }
        chatHistory.add(new Message("user", prompt.getPromt()));
//    	System.out.println(prompt);
        ChatRequest request = new ChatRequest(model, prompt.getPromt());
        // call the API
//        System.out.println("Hello");
        ChatResponse response = restTemplate.postForObject(apiUrl, request, ChatResponse.class);
        if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
            return null;
        }
        // return the first response
//        return new Prompt(response.getChoices().get(0).getMessage().getContent());
        Prompt reply =new Prompt(response.getChoices().get(0).getMessage().getContent());
        
        session.setAttribute("chatHistory" , chatHistory);
        
        return reply;
    }
}