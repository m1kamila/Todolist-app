package com.todolist.todolist.config;

import com.todolist.todolist.entity.ToDo;
import org.springframework.context.annotation.Configuration;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelProcessor;

@Configuration
public class MyEntityProcessor implements RepresentationModelProcessor<EntityModel<ToDo>> {
    @Override
    public EntityModel<ToDo> process(EntityModel<ToDo> model) {
        return EntityModel.of(model.getContent());
    }
}