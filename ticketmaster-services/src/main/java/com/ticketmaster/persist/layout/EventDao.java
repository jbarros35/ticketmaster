package com.ticketmaster.persist.layout;

import java.util.List;

import com.ticketmaster.model.Event;

public interface EventDao {
 	
	public List<Event> getHighlights();
	public List<Event> getIncomingEvents();
 
}