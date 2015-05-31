package com.ticketmaster.persist.layout;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ticketmaster.model.Event;
import com.ticketmaster.persist.CustomHibernateDaoSupport;

@Repository("eventDao")
public class EventDaoImpl extends CustomHibernateDaoSupport implements EventDao {
	
	@Autowired
	private SessionFactory mySessionFactory;
	
	public List<Event> getHighlights() {		
		List<Event> list = getHibernateTemplate().loadAll(Event.class);
		return list;
	}
 
}