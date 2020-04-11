create table "Origin" (
  "originId" serial primary key,
  "host" varchar(100) not null,
  "port" smallint not null
);

create table "Url" (
  "urlId" serial primary key,
  "origin" int not null references "Origin"("originId"),
  "path" varchar(200) not null,
  "parentId" int references "Url"("urlId"),
  "params" json
);

create table "Request" (
  "requestId" serial primary key,
  "urlId" int not null references "Url"("urlId"),
  "number" int not null
);

create table "Response" (
  "responseId" bigserial primary key,
  "requestId" int not null references "Response"("responseId"),
  "status" smallint not null
)
