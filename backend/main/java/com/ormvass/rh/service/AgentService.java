package com.ormvass.rh.service;

import com.ormvass.rh.model.Agent;
import com.ormvass.rh.repository.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AgentService {

    @Autowired
    private AgentRepository agentRepository;

    public List<Agent> getAllAgents() {
        return agentRepository.findAll();
    }

    public Optional<Agent> getAgentById(int id) {
        return agentRepository.findById(id);
    }

    public Agent saveAgent(Agent agent) {
        System.out.println("Saving agent: " + agent);
        return agentRepository.save(agent);
    }

    public void deleteAgent(int id) {
        System.out.println("Deleting agent with ID: " + id);
    	agentRepository.deleteById(id);
    }
}
