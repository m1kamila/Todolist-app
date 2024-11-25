package com.todolist.todolist.repositories;

import com.todolist.todolist.entity.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "toDos", path = "toDos")
public interface ToDoRepository extends JpaRepository<ToDo, Integer> {

    @Query(value = "SELECT * FROM TODO", nativeQuery = true)
    List<ToDo> findAll();
}