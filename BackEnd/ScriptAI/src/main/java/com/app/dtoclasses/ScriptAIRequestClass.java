package com.app.dtoclasses;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class ScriptAIRequestClass {

//	private String aiModel;
//	private List<ScriptAIMessage> messages;
//	
//	public ScriptAIRequestClass(String aiModel , String prompt) {
//		this.aiModel = aiModel;
//		this.messages=new ArrayList<>();
//		this.messages.add(new ScriptAIMessage("user" , prompt));
//	}
	
	    private String model;
	    private List<ScriptAIMessage> messages;

	    public ScriptAIRequestClass(String model, String prompt) {
	        this.model = model;
	        this.messages = new ArrayList<>();
	        this.messages.add(new ScriptAIMessage("user",prompt));
	    }
	
}
