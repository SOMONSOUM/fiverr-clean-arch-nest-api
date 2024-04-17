import * as bcrypt from 'bcrypt';

const SALT = 10;

export const passwordHash = (password: string) => bcrypt.hash(password, SALT);

export const passwordCompare = (password: string, hash: string) => bcrypt.compare(password, hash);