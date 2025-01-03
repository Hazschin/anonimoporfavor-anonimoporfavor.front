import { NoteOverviewType, SearchAndCountNotesType } from "../types/Notes";

export const configfetch = {
  post: {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Tipo de contenido
    },
  },
};

export async function fetchGetData<T>(path: string = ""): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ROUTE_API}${path}`);
  const data: T = await res.json();
  return data;
}

export async function fetchPostData<T>(
  path: string = "",
  body: any
): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ROUTE_API}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Tipo de contenido
    },
    body: JSON.stringify(body),
  });
  const data: T = await res.json();
  return data;
}

export const getNotes = async (postPerPage: number, page: number) => {
  return await fetchPostData<NoteOverviewType[]>(`/notes/getNotes`, {
    postPerPage,
    page,
  });
};

export const searchNotes = async (
  search: string,
  postPerPage: number,
  page: number
) => {
  return await fetchPostData<SearchAndCountNotesType>(`/notes/searchNotes`, {
    search,
    postPerPage,
    page,
  });
};

export const searchAndCountNotes = async (
  search: string,
  postPerPage: number,
  page: number
) => {
  return await fetchPostData<SearchAndCountNotesType>(
    `/notes/searchAndCountNotes`,
    {
      search,
      postPerPage,
      page,
    }
  );
};
