package com.ormvass.rh.controller;

import com.ormvass.rh.model.Note;
import com.ormvass.rh.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/notes")
public class NoteController {
	
	  @Autowired
	    private NoteService noteService;

	    @GetMapping
	    public List<Note> getAllNotes() {
	        return noteService.getAllNotes();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Note> getNoteById(@PathVariable int id) {
	        Optional<Note> note = noteService.getNoteById(id);
	        return note.map(ResponseEntity::ok)
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PostMapping
	    public Note createNote(@RequestBody Note note) {
	        return noteService.saveNote(note);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteNote(@PathVariable int id) {
	        if (noteService.getNoteById(id).isPresent()) {
	        	noteService.deleteNote(id);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

}
