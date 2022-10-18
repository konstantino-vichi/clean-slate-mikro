import { Migration } from '@mikro-orm/migrations';

export class Migration20221014062052 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "base_x" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, constraint "base_x_pkey" primary key ("id"));');

    this.addSql('create table "user" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, constraint "user_pkey" primary key ("id"));');
  }

}
