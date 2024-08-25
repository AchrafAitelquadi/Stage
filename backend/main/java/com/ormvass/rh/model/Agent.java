package com.ormvass.rh.model;

import jakarta.persistence.*;


@Entity
@Table(name = "agent")  // Table for common attributes
public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom;
    private String prenom;
    private String codeAuth;
    private String password;
    private int role;

    // Constructors
    public Agent() {}

    public Agent(String nom, String prenom, String codeAuth, String password, int role) {
        this.nom = nom;
        this.prenom = prenom;
        this.codeAuth = codeAuth;
        this.password = password;
        this.role = role;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getCodeAuth() {
        return codeAuth;
    }

    public void setCodeAuth(String codeAuth) {
        this.codeAuth = codeAuth;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }
}
