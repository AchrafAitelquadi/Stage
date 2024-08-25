package com.ormvass.rh.service;

import com.ormvass.rh.model.Convocation;
import com.ormvass.rh.repository.ConvocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConvocationService {

    @Autowired
    private ConvocationRepository convocationRepository;

    public List<Convocation> getAllConvocations() {
        return convocationRepository.findAll();
    }

    public Optional<Convocation> getConvocationById(int id) {
        return convocationRepository.findById(id);
    }

    public Convocation saveConvocation(Convocation convocation) {
        System.out.println("Saving Convocation: " + convocation);
        return convocationRepository.save(convocation);
    }

    public void deleteConvocation(int id) {
        System.out.println("Deleting Convocation with ID: " + id);
        convocationRepository.deleteById(id);
    }
}
