create table
  personalinfo if not exists(
    userid uuid default uuid_generate_v4 (),
    emailAddress text,
    password text,
    primary key (userId)
  );

insert into
  personalinfo (emailaddress, password)
values
  ('juandelacruz@gmail.com', 'qwerty');

select * from personalinfo;
-- drop table personalInfo;

create table
  forminformation if not exist(
    formid uuid default uuid_generate_v4 (),
    formname varchar(4000),
    formdescription varchar(4000),
    label varchar(4000),
    type varchar(4000),
    required varchar(50),
    ordernumber int, --serial
    primary key (formid)
  );

insert into
  forminformation (
    formname,
    formdescription,
    label,
    type,
    required,
    ordernumber
  )
  values (
    'pizza',
    'pizza pizza',
    'Text',
    'text',
    'yes',
    1
  )

select * from forminformation;

drop table formInformation