const BASE_URL = "https://notes-api.dicoding.dev/v2";

class notesData {
  static createNote = async (note) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      };
      const response = await fetch(`${BASE_URL}/notes`, options);
      const responseJson = await response.json();
      this.showResponseMessage(responseJson.message);
      this.getNotes();
    } catch (error) {
      this.showResponseMessage(error);
    }
  };

  static getNotes = async () => {
    try {
      const response = await fetch(`${BASE_URL}/notes`);
      const responseJson = await response.json();
      const { data } = responseJson;
      return data;
    } catch (error) {
      this.showResponseMessage(error);
    }
  };

  static getArchivedNotes = async () => {
    try {
      const response = await fetch(`${BASE_URL}/notes/archived`);
      const responseJson = await response.json();
      const { data } = responseJson;
      return data;
    } catch (error) {
      this.showResponseMessage(error);
    }
  };

  static getSingleNote = async (note_id) => {
    const response = await fetch(`${BASE_URL}/notes/${note_id}`);
    const responseJson = await response.json();
    const { data } = responseJson;
    return data;
  };

  static archiveNote = async (note_id) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `${BASE_URL}/notes/${note_id}/archive`,
        options,
      );
      const responseJson = await response.json();
      this.showResponseMessage(responseJson.message);
    } catch (error) {
      this.showResponseMessage(error);
    }
  };

  static unarchiveNote = async (note_id) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `${BASE_URL}/notes/${note_id}/unarchive`,
        options,
      );
      const responseJson = await response.json();
      this.showResponseMessage(responseJson.message);
    } catch (error) {
      this.showResponseMessage(error);
    }
  };

  static deleteNote = async (noteId) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(`${BASE_URL}/notes/${noteId}`, options);
      const responseJson = await response.json();
      this.showResponseMessage(responseJson.message);
      this.getNotes();
    } catch (error) {
      this.showResponseMessage(error);
    }
  };

  static showResponseMessage = (message = "Ups, something's went wrong!") => {
    alert(message);
  };
}

export default notesData;
