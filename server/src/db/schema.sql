create table "Origin" (
  "originId" bigserial primary key,
  "host" varchar(100) not null,
  "port" smallint not null default 443
);

create table "Url" (
  "urlId" bigserial primary key,
  "originId" int not null references "Origin"("originId"),
  "path" varchar(200) not null,
  "params" json
);

create table "Request" (
  "requestId" bigserial primary key,
  "urlId" int not null references "Url"("urlId"),
  "number" int not null,
  "speed" smallint not null default 1,
  "after" timestamp
  "status" smallint,
  "responseHeaders" json
);

create view "UrlString" as
  select r."requestId", "number", "times", 'https://' || "host" || "path" as "url" from "Request" r
  join "Url" uri on r."urlId" = uri."urlId"
  join "Origin" o on uri."originId" = o."originId";
