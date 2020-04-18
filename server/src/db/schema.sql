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
  "after" timestamp,
  "status" smallint,
  "responseHeaders" json
);

-- create view "UrlString" as
--   select r."requestId", "number", "times", 'https://' || "host" || "path" as "url" from "Request" r
--   join "Url" uri on r."urlId" = uri."urlId"
--   join "Origin" o on uri."originId" = o."originId";

create table "Currency" (
  "currencyId" char(3) primary key,
  "ask" decimal not null,
  "bid" decimal not null,
  "at" timestamp not null default current_timestamp
);

insert into "Currency"("currencyId", "ask", "bid") values ('UAH', 1.0, 1.0);

create table "CurrencyHistory" (
  "CurrencyHistoryId" bigserial primary key,
  "currencyId" char(3) not null references "Currency"("currencyId"),
  "ask" decimal not null,
  "bid" decimal not null,
  "at" timestamp not null default current_timestamp
);

create table "Param" (
  "paramId" bigserial primary key,
  "name" varchar(200) not null
);

create table "ParamValue" (
  "paramValueId" bigserial primary key,
  "paramId" bigint null references "Param"("paramId"),
  "name" varchar(200) not null
);

-- create table "Shop" (
--   "shopId" bigserial primary key,
--   "name" varchar(200) not null,
--   "company" varchar(200) not null
-- );

-- insert into "Shop"("name", "company") values ('Labiak Shop', 'Labiak Inc.');

create table "Offer" (
  "offerId" bigserial primary key,
  -- "shopId" int not null references "Shop"("shopId"),
  "available" boolean not null default false,
  "name" varchar(200) not null,
  "description" text,
  "price" decimal not null,
  "currencyId" char(3) not null references "Currency"("currencyId"),
  "quantity" int not null default 1,
  "createdAt" timestamp not null default current_timestamp,
  "updatedAt" timestamp not null default current_timestamp
);

insert into "Offer"("name", "currencyId", "price")
  values ('Диван', 'UAH', 5500.50);

create table "OfferParam" (
  "offerId" bigint not null,
  "paramId" bigint not null,
  "paramValueId" bigint,
  "value" text,
  "at" timestamp not null default current_timestamp
);

create table "OfferPhoto" (
  "offerPhotoId" bigserial primary key,
  "offerId" bigint not null references "Offer"("offerId"),
  "url" varchar(200) not null
);
