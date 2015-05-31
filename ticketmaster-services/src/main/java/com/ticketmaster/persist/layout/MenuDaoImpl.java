package com.ticketmaster.persist.layout;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ticketmaster.model.Menu;
import com.ticketmaster.persist.CustomHibernateDaoSupport;

@Repository("menuDao")
public class MenuDaoImpl extends CustomHibernateDaoSupport implements MenuDao {
	
	@Autowired
	private SessionFactory mySessionFactory;
	
	public List<Menu> getMenu() {		
		List<Menu> list = getHibernateTemplate().loadAll(Menu.class);
		return list;
	}
 
}