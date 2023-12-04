import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import {types as booksTypes, resolvers as booksResolvers} from "./modules/books"

//TYPES
const typesArray = [booksTypes]
export const types =  mergeTypes(typesArray, { all: true });


//RESOLVERS
const resolversArray = [booksResolvers]
export const resolvers =  mergeResolvers(resolversArray);