package com.bbende.sba.notes;

import org.glassfish.jersey.server.ResourceConfig;
import com.bbende.sba.notes.api.NoteResource;
import org.springframework.context.annotation.Configuration;

import javax.ws.rs.ApplicationPath;

@Configuration
@ApplicationPath("/api")
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig() {
        register(NoteResource.class);
    }
}
