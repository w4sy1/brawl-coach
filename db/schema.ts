import {sqliteTable,text,integer,primaryKey} from 'drizzle-orm/sqlite-core';
export const coachRecords=sqliteTable('coach_records',{kind:text('kind').notNull(),key:text('key').notNull(),value:text('value').notNull(),revision:integer('revision').notNull().default(1),updatedAt:integer('updated_at').notNull()},t=>[primaryKey({columns:[t.kind,t.key]})]);
export const coachAudit=sqliteTable('coach_audit',{id:integer('id').primaryKey({autoIncrement:true}),actor:text('actor').notNull(),action:text('action').notNull(),target:text('target').notNull(),at:integer('at').notNull()});
