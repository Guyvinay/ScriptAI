package com.app.dtoclasses;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data

@NoArgsConstructor
public class ChatRequest {

	  private String model;

	private List<Message> messages;

	    public ChatRequest(String model, List<Message> messages) {
	        this.model = model;
	        this.messages = messages;
	    }
}

