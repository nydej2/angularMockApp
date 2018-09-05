/**
 * Created by Jonas on 20.08.2018.
 */
export interface Tag {
  label?: string;
}

export interface User {
  name?: string;
  email?: string;
}

export interface Task {
  id?: number;
  title?: string;
  description?: string;
  tags?: Tag[];
  favorite?: boolean;
  state?: string;
  assignee?: User;
}

export const stateTexts = {'BACKLOG': 'Backlog',
                            'IN_PROGRESS': 'In Bearbeitung',
                            'TEST': 'Im Test',
                            'COMPLETED': 'Abgeschlossen'};

export function createInitialTask(): Task {
  return {
    assignee: {},
    tags: []
  };
}

export const stateGroups = [
  {
    label: 'Planung',
    states: ['BACKLOG']
  },
  {
    label: 'Entwicklung',
    states: ['IN_PROGRESS', 'TEST']
  },
  {
    label: 'In Produktion',
    states: ['COMPLETED']
  }
];
