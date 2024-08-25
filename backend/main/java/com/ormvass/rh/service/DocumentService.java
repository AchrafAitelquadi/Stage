package com.ormvass.rh.service;

import com.ormvass.rh.model.Document;
import com.ormvass.rh.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository documentRepository;

    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }

    public Optional<Document> getDocumentById(int id) {
        return documentRepository.findById(id);
    }

    public Document saveDocument(Document document) {
        System.out.println("Saving Document: " + document);
        return documentRepository.save(document);
    }

    public void deleteDocument(int id) {
        System.out.println("Deleting Document with ID: " + id);
        documentRepository.deleteById(id);
    }
}
