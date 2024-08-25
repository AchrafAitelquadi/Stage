package com.ormvass.rh.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Epreuve {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String type;
    private int noteEl;


	
	 public Epreuve() {}
	 
	 public Epreuve(String type, int noteEl) {
	        this.type = type;
	        this.noteEl = noteEl;
	     }
	 
	 	public int getId() {
	        return id;
	    }

	    public void setId(int id) {
	        this.id = id;
	    }

	    public String getType() {
	        return type;
	    }

	    public void setType(String type) {
	        this.type = type;
	    }
	    
	    public int getNoteEl() {
	        return noteEl;
	    }

	    public void setNoteEl(int noteEl) {
	        this.noteEl = noteEl;
	    }
 
}
