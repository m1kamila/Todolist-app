package com.todolist.todolist.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "todo")
@Getter
@Setter
public class ToDo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "completed")
    private boolean completed;

    @Column(name = "date_created")
    private Date dateCreated;

    @Column(name = "last_updated")
    private Date lastUpdated;
}
