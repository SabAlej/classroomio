import { writable, derived } from 'svelte/store';
import { STEPS } from '../constants/quiz';
import type { Writable } from 'svelte/store';
import type { CurrentOrg } from '../types/org';

export const orgs = writable([]);
export const currentOrg: Writable<CurrentOrg> = writable({
  id: '',
  name: '',
  shortName: '',
  siteName: '',
  avatar_url: '',
  memberId: '',
  role_id: '',
  landingpage: {},
  theme: ''
});
export const orgAudience = writable([]);
export const orgTeam = writable([]);
export const currentOrgPath = derived(currentOrg, ($currentOrg) =>
  $currentOrg.siteName ? `/org/${$currentOrg.siteName}` : ''
);

// Quiz
export const createQuizModal = writable({
  open: false,
  openEdit: false,
  title: '',
  id: null
});

export const deleteModal = writable({
  id: null,
  open: false,
  isQuestion: false
});

export const quizesStore = writable([]);

export const quizStore = writable({
  uuid: '',
  title: '',
  questions: [],
  timelimit: '10s',
  theme: 'standard',
  pin: ''
});

export const playQuizStore = writable({
  step: STEPS.CONNECT_TO_PLAY
});