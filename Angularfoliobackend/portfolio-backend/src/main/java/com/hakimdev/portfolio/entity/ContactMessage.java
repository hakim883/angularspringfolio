package com.hakimdev.portfolio.entity;

public class ContactMessage {
	 private String name;
	    private String email;
	    private String message;

	    // Constructeurs
	    public ContactMessage() {}

	    public ContactMessage(String name, String email, String message) {
	        this.name = name;
	        this.email = email;
	        this.message = message;
	    }

	    // Getters et setters
	    public String getName() { return name; }
	    public void setName(String name) { this.name = name; }

	    public String getEmail() { return email; }
	    public void setEmail(String email) { this.email = email; }

	    public String getMessage() { return message; }
	    public void setMessage(String message) { this.message = message; }
	}


