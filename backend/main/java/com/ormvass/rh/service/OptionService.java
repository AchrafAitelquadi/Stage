package com.ormvass.rh.service;

import com.ormvass.rh.model.Option;
import com.ormvass.rh.repository.OptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OptionService {

    @Autowired
    private OptionRepository optionRepository;

    public List<Option> getAllOptions() {
        return optionRepository.findAll();
    }

    public Optional<Option> getOptionById(int id) {
        return optionRepository.findById(id);
    }

    public Option saveOption(Option option) {
        return optionRepository.save(option);
    }

    public void deleteOption(int id) {
    	optionRepository.deleteById(id);
    }
}
