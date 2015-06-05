package com.ticketmaster.model;

import static javax.persistence.GenerationType.IDENTITY;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "EVENT")
public class Event  implements Serializable {

	private static final long serialVersionUID = 7014943291744622322L;
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "EVENT_ID", unique = true, nullable = false)
	private Long eventId;
	@Column(name = "TITLE", unique = false, nullable = true, length = 255)
	private String title;
	@Column(name = "IMG_SRC", unique = false, nullable = true, length = 255)
	private String imgSrc;
	@Column(name = "ACTIVE", unique = false, nullable = true)
	private Boolean active;
	@Column(name = "SHORT_DESCRIPTION", unique = false, nullable = true, length = 255)
	private String shortDescription;
	@Column(name = "\"DATA_INI\"", unique = false, nullable = true)
	private Date dataIni;
	@Column(name = "\"DATA_FIN\"", unique = false, nullable = true)
	private Date dataFin;
	public Long getEventId() {
		return eventId;
	}
	public void setEventId(Long eventId) {
		this.eventId = eventId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImgSrc() {
		return imgSrc;
	}
	public void setImgSrc(String imgSrc) {
		this.imgSrc = imgSrc;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	public String getShortDescription() {
		return shortDescription;
	}
	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}
	
	public Date getDataIni() {
		return dataIni;
	}
	public void setDataIni(Date dataIni) {
		this.dataIni = dataIni;
	}
	public Date getDataFin() {
		return dataFin;
	}
	public void setDataFin(Date dataFin) {
		this.dataFin = dataFin;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((active == null) ? 0 : active.hashCode());
		result = prime * result + ((eventId == null) ? 0 : eventId.hashCode());
		result = prime * result + ((imgSrc == null) ? 0 : imgSrc.hashCode());
		result = prime
				* result
				+ ((shortDescription == null) ? 0 : shortDescription.hashCode());
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Event other = (Event) obj;
		if (active == null) {
			if (other.active != null)
				return false;
		} else if (!active.equals(other.active))
			return false;
		if (eventId == null) {
			if (other.eventId != null)
				return false;
		} else if (!eventId.equals(other.eventId))
			return false;
		if (imgSrc == null) {
			if (other.imgSrc != null)
				return false;
		} else if (!imgSrc.equals(other.imgSrc))
			return false;
		if (shortDescription == null) {
			if (other.shortDescription != null)
				return false;
		} else if (!shortDescription.equals(other.shortDescription))
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}
	
	
}
