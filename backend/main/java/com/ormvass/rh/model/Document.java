package com.ormvass.rh.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "document")  // Table for common attributes
public class Document {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;
	    private String titre;
	    private String contenu;
	    private String type;
	    private boolean statut;
	    
	    
	    public int getId() {
	        return id;
	    }

	    public void setId(int id) {
	        this.id = id;
	    }

	    public String getTitre() {
	        return titre;
	    }

	    public void setTitre(String titre) {
	        this.titre = titre;
	    }

	    public String getContenu() {
	        return contenu;
	    }

	    public void setContenu(String contenu) {
	        this.contenu = contenu;
	    }
	    
	    public String getType() {
	        return type;
	    }

	    public void setType(String type) {
	        this.type = type;
	    }

	    public boolean getStatut() {
	        return statut;
	    }

	    public void setStatut(boolean statut) {
	        this.statut = statut;
	    }
}