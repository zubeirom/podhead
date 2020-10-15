import Model, { attr } from '@ember-data/model';

export default class AccountModel extends Model {
    @attr('string') firstName;
    @attr('string') lastName;
    @attr('string') username;
    @attr('string') email;
    @attr('string') profileImageUrl;
    @attr('date') createdAt;
    @attr('date') updatedAt;
}
