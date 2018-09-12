package com.revature.model;

public class Event {
	private int id;
	private String name;
	private String type;
	private String description;
	private String date;
	private String timestamp;
	private int authorId;

	public Event(int id, String name, String type, String description, String date, String timestamp, int authorId) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.description = description;
		this.date = date;
		this.timestamp = timestamp;
		this.authorId = authorId;
	}

	@Override
	public String toString() {
		return "Event [id=" + id + ", name=" + name + ", type=" + type + ", description=" + description + ", date="
				+ date + ", timestamp=" + timestamp + ", authorId=" + authorId + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + authorId;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + id;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((timestamp == null) ? 0 : timestamp.hashCode());
		result = prime * result + ((type == null) ? 0 : type.hashCode());
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
		if (authorId != other.authorId)
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id != other.id)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (timestamp == null) {
			if (other.timestamp != null)
				return false;
		} else if (!timestamp.equals(other.timestamp))
			return false;
		if (type == null) {
			if (other.type != null)
				return false;
		} else if (!type.equals(other.type))
			return false;
		return true;
	}

	public Event() {
		super();
		// TODO Auto-generated constructor stub
	}

}
