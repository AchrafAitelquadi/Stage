package com.ormvass.rh.service;

import com.ormvass.rh.model.Typepv;
import com.ormvass.rh.repository.TypepvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TypepvService {

    @Autowired
    private TypepvRepository typepvRepository;

    public List<Typepv> getAllTypepvs() {
        return typepvRepository.findAll();
    }

    public Optional<Typepv> getTypepvById(int id) {
        return typepvRepository.findById(id);
    }

    public Typepv saveTypepv(Typepv typepv) {
        return typepvRepository.save(typepv);
    }

    public void deleteTypepv(int id) {
        typepvRepository.deleteById(id);
    }
}
