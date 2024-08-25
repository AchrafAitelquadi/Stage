package com.ormvass.rh.service;

import com.ormvass.rh.model.Liste;
import com.ormvass.rh.repository.ListeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ListeService {

    @Autowired
    private ListeRepository listeRepository;

    public List<Liste> getAllListes() {
        return listeRepository.findAll();
    }

    public Optional<Liste> getListeById(int id) {
        return listeRepository.findById(id);
    }

    public Liste saveListe(Liste liste) {
        return listeRepository.save(liste);
    }

    public void deleteListe(int id) {
    	listeRepository.deleteById(id);
    }
}
