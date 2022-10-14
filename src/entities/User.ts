import { BaseEntity, PrimaryKey, Property, Entity } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity()
export class BaseX<T extends { id: string }> extends BaseEntity<T, 'id'> {
  @PrimaryKey({ type: 'uuid' })
  public id: string = v4();

  @Property()
  public createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  public updatedAt: Date = new Date();

  constructor(body = {}) {
    super();
    this.assign(body);
  }
}

@Entity()
export class User extends BaseX<User> {
  @Property()
  public name: string;

  constructor(body = {}) {
    super();
    this.assign(body);
  }
}
