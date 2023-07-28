package com.app.dtoclasses;

import java.util.List;

import lombok.Data;

@Data
public class ChatResponse {

    private List<Choice> choices;

    // constructors, getters and setters
    
    @Data
    public static class Choice {

        private int index;
        private Message message;

        // constructors, getters and setters
    }
}
