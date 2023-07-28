package com.app.Entity;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
public class Chat {

	private Integer id;
	private String msg;
	private String remark;
	
}
