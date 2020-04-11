create table "Origin" (
  "originId" serial primary key,
  "host" varchar(100) not null,
  "port" smallint not null default 443
);

create table "Url" (
  "urlId" serial primary key,
  "originId" int not null references "Origin"("originId"),
  "path" varchar(200) not null,
  "params" json
);

create table "Request" (
  "requestId" serial primary key,
  "urlId" int not null references "Url"("urlId"),
  "number" int not null,
  "times" smallint not null default 1
);

create table "Response" (
  "responseId" bigserial primary key,
  "requestId" int not null references "Request"("requestId"),
  "status" smallint not null
);

create view "UrlString" as
  select r."requestId", "number", "times", 'https://' || "host" || "path" as "url" from "Request" r
  join "Url" uri on r."urlId" = uri."urlId"
  join "Origin" o on uri."originId" = o."originId";
