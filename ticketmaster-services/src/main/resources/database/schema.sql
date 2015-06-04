create schema if not exists test;
create table if not exists TEST.MENU (MENU_ID INT PRIMARY KEY, TEXT varchar(255), URL varchar(255));
CREATE TABLE test.event
(
  event_id bigint NOT NULL,
  title character(255),
  img_src character(255),
  active boolean DEFAULT false,
  short_description character(255),
  CONSTRAINT event_pkey PRIMARY KEY (event_id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE test.event OWNER TO postgres;
