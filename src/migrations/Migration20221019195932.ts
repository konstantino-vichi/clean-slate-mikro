import { Migration } from '@mikro-orm/migrations';

export class Migration20191019195930 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "User" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null);');
  }

}