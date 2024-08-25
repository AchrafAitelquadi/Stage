package com.ormvass.rh.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "commission")  // Table for common attributes
public class Commission {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;
	    private Date dateCreation;
 	    
	    
	    public int getId() {
	        return id;
	    }

	    public void setId(int id) {
	        this.id = id;
	    }

	    public Date getDateCreation() {
	        return dateCreation;
	    }

	    public void setDateCreation(Date dateCreation) {
	        this.dateCreation = dateCreation;
	    }
 

}