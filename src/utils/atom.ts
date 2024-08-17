import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const isUserAskedAtom = atom(false);
export const languageAtom = atomWithStorage<string>('language', 'en');
