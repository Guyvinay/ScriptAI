package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.app.dtoclasses.ChatRequest;
import com.app.dtoclasses.ChatResponse;

@RestController
public class ChatController {
//    @Qualifier("openaiRestTemplate")
    @Autowired
    private RestTemplate restTemplate;
    @Value("${openai.model}")
    private String model;
    @Value("${openai.api.url}")
    private String apiUrl;

    private String boilar = "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Backend Software Developer.\n" +
            "That will require me to have the following content\n" +
            "```\n" +
            "Spring core, Sprint Boot, Spring Data JPA, Spring Web, REST API, HTTP protocol, Authetication and Authorization, Spring Security, Cookie and JWT authentication, Arrays, Strings, Stack, Queue, linked list\n" +
            "```\n" +
            " I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the technical interview with me on coding ( Topics : Spring core, Sprint Boot, Spring Data JPA, Spring Web, REST API, HTTP protocol, Authetication and Authorization, Spring Security, Cookie and JWT authentication) and data structures and algorithms ( Topics : Arrays, Strings, Stack, Queue, linked list ) . Ask me the questions and wait for my answers. I will say the phrase “start the interview” for you to start. Ask one question at a time  if I am not able to answer satisfactorily, Give me feedback in this framework:\n" +
            "\n" +
            "####\n" +
            "If it is a Data Structures and Algorithms or a coding technical question then\n" +
            "REACTO: \n" +
            "R: Repeat (Repeating the question in your own word)\n" +
            "E: Examples (Give some examples to clear out the meaning) and edge cases\n" +
            "A: Approach (Discussing the approach to solve the question)\n" +
            "C: Code (Writing the code with proper indentation, commenting and proper coding format)\n" +
            "T: Testing the code (With some own test cases)\n" +
            "O: Optimise (Use optimisation to optimise the already present code)\n" +
            "---\n" +
            "If it is a Conceptual question then\n" +
            "D: Definition\n" +
            "U: Use-case\n" +
            "B: Benefit\n" +
            "X: Extra Information\n" +
            "---\n" +
            "#####\n" +
            "{<Ask me the questions individually like an interviewer and wait for my answers. Do not ask more than one question at a time >}\n" +
            "Questions can include both new questions and follow up questions from the previous questions. Continue the process until I ask you to stop.  And, you will stop the interview when I tell you to stop using the phrase “stop the interview”. After that, you would provide me feedback ```when I ask you using the phrase, “share your feedback”.\n" +
            "```\n" +
            "The cumulative feedback generated at the end should be evaluated using the following rubrics. While grading my responses you have to very strict like a real interviewer\n" +
            "1.Subject Matter Expertise\n" +
            "2.Communication skills\n" +
            "3. Problem Solving skills\n" +
            "4.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire\n" +
            "Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10";


    @GetMapping("/chat")
    public String chat(@RequestParam("prompt") String prompt) {
        // create a request
        ChatRequest request = new ChatRequest(model, boilar+" "+prompt);
        // call the API
        ChatResponse response = restTemplate.postForObject(apiUrl, request, ChatResponse.class);
        if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
            return "No response";
        }
        // return the first response
        return response.getChoices().get(0).getMessage().getContent();
    }
}
