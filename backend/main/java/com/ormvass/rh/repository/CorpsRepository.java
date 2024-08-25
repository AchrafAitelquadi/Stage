package com.ormvass.rh.repository;

import com.ormvass.rh.model.Corps;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CorpsRepository extends JpaRepository<Corps, Integer> {
}