package com.ormvass.rh.repository;

import com.ormvass.rh.model.Typepv;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypepvRepository extends JpaRepository<Typepv, Integer> {
}