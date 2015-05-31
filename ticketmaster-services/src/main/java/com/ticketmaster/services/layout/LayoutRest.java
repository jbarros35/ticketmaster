package com.ticketmaster.services.layout;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ticketmaster.model.Event;
import com.ticketmaster.model.Menu;
import com.ticketmaster.persist.layout.EventDao;
import com.ticketmaster.persist.layout.MenuDao;

@Component
@Path("/layout")
public class LayoutRest {
 
	@Autowired	
	MenuDao menuDao;
	
	@Autowired	
	EventDao eventDao;
	
	@GET
	@Path("/getMenu")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Menu> getMenu() {
		List<Menu> menu = menuDao.getMenu();
		return menu;
	}

	@GET
	@Path("/getHighlights")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Event> getHighLights() {
		List<Event> events = eventDao.getHighlights();
		return events;
	}	

	public MenuDao getMenuDao() {
		return menuDao;
	}


	public void setMenuDao(MenuDao menuDao) {
		this.menuDao = menuDao;
	}

	public EventDao getEventDao() {
		return eventDao;
	}

	public void setEventDao(EventDao eventDao) {
		this.eventDao = eventDao;
	}
	
	
}