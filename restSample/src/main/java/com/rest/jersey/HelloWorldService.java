package com.rest.jersey;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.rest.jersey.pojo.Student;

@Path("/hello")
public class HelloWorldService {
 
	@GET
	@Path("/{param}")
	public Response getMsg(@PathParam("param") String msg) {
 
		String output = "Jersey say : " + msg;
 
		return Response.status(200).entity(output).build();
 
	}
	
	@GET
	@Path("/print/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public Student produceJSON( @PathParam("name") String name ) {

		Student st = new Student(name, "Diaz",22,1);

		return st;

	}
}