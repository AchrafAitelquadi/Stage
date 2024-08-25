package com.ormvass.rh.repository;

import com.ormvass.rh.model.Liste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListeRepository extends JpaRepository<Liste, Integer> {
}