package com.ormvass.rh.repository;

import com.ormvass.rh.model.Convocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConvocationRepository extends JpaRepository<Convocation, Integer> {
}