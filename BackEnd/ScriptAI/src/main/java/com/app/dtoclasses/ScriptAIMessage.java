package com.app.dtoclasses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ScriptAIMessage {

	private String role;
	private String prompt;
	
}
