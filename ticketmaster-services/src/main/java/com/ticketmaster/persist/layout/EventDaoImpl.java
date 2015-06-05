package com.ticketmaster.persist.layout;

import java.util.Calendar;
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

	@Override
	public List<Event> getIncomingEvents() {
		Calendar date1 = Calendar.getInstance();
		Calendar date2 = Calendar.getInstance();
		date2.add(Calendar.DAY_OF_MONTH, 5);
		Object[] values = new Object[]{
				date1.getTime(), date2.getTime()				
		};
		List<Event> list = getHibernateTemplate().find("select E from Event E"
				+ " WHERE E.dataIni BETWEEN ? AND ?"
				+ " order by E.dataIni", values);
		return list;
	}
 
}