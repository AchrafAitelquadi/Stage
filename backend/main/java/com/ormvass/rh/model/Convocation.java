package com.ormvass.rh.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "convocation")  // Table for common attributes
public class Convocation {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id; 
	    
	    public int getId() {
	        return id;
	    }

	    public void setId(int id) {
	        this.id = id;
	    }
	    
}