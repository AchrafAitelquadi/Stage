package com.ormvass.rh.repository;

import com.ormvass.rh.model.Chefservice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChefserviceRepository extends JpaRepository<Chefservice, Integer> {
}
