package com.ormvass.rh.repository;

import com.ormvass.rh.model.Serv;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ServRepository extends JpaRepository<Serv, Integer> {
}