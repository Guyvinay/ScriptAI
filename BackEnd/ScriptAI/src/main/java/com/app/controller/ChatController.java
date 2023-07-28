 package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.app.dtoclasses.ChatRequest;
import com.app.dtoclasses.ChatResponse;
import com.app.dtoclasses.Message;

import jakarta.servlet.http.HttpSession;

@RestController
public class ChatController {
//    @Qualifier("openaiRestTemplate")

    @Autowired
    private RestTemplate restTemplate;
    
    @Value("${openai.model}")
    private String model;
    
    @Value("${openai.api.url}")
    private String apiUrl;
    
    @GetMapping("/chat")
    public String chat(@RequestParam("prompt") String prompt, HttpSession session) {
       
        List<Message> chatHistory = (List<Message>) session.getAttribute("chatHistory" );
        if (chatHistory == null) {
            chatHistory = new ArrayList<>();
        }
        
        chatHistory.add(new Message("user", prompt));

       
        ChatRequest request = new ChatRequest(model, chatHistory);
      
        ChatResponse response = restTemplate.postForObject(apiUrl, request, ChatResponse.class);

        if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
            return "No response";
        }

       
        String reply = response.getChoices().get(0).getMessage().getContent();
        
      
        session.setAttribute("chatHistory" , chatHistory);

        return reply;
    }
}
