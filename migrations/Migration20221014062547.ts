import { Migration } from '@mikro-orm/migrations';

export class Migration20221014062547 extends Migration {

  async up(): Promise<void> {
    this.addSql('select 1');
  }

}
