/**
 * Created by Ben on 6/1/16.
 */
import { Mongo } from 'meteor/mongo';

// With meteor we can make a new collection like this and then export it so we can have access to it on our client

export const Tasks = new Mongo.Collection('tasks');