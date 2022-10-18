import { Migration } from '@mikro-orm/migrations';

export class Migration20191019195930 extends Migration {

  async up(): Promise<void> {
    this.addSql('select 1 + 1');

    this.addSql('create table "tag" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null);');
    this.addSql('alter table "tag" add constraint "tag_pkey" primary key ("id");');
  }

}