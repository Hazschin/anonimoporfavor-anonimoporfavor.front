export interface Notes {
  author: string;
  title?: string;
  note: string;
}

export interface NoteOverviewType {
  _id?: string;
  id: number;
  author?: string;
  title: string;
  noteOverview: string;
}

export interface SearchNotesType {
  notes: NoteOverviewType;
}

export interface SearchAndCountNotesType {
  notes: NoteOverviewType[];
  qNotes: number;
}
