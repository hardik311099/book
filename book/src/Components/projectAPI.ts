const baseUrl = "http://localhost:3000/api/v1/";

function parseJSON(response: Response) {
  return response.json();
}

function delay(ms: number) {
  return function (x: any): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(x), ms);
    });
  };
}

const projectAPI = {
  get(page = 1, limit = 20) {
    return fetch(`${baseUrl}category/list`)
      .then(delay(50))
      .then(parseJSON)
      .catch((error: TypeError) => {
        console.log("log client error" + error);
        throw new Error(
          "There was an error retrieving the projects. Please try again."
        );
      });
  },
  getbook() {
    return fetch(`${baseUrl}book/list`)
      .then(delay(1000))
      .then(parseJSON)
      .catch((error: TypeError) => {
        console.log("log client error" + error);
        throw new Error(
          "There was an error retrieving the projects. Please try again."
        );
      });
  },

  post(category: string) {
    return fetch(`${baseUrl}category/create`, {
      method: "POST",
      body: JSON.stringify({ name: category }),
    })
      .then(delay(30))
      .then(parseJSON)
      .catch((err: TypeError) => {
        console.log("cetegory add err", err);
        throw new Error("There war an error add Cetegory. Please try again.");
      });
  },
  // put(project: any) {
  //   return fetch(`${baseUrl}/${project.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(project),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(parseJSON)
  //     .catch((error: TypeError) => {
  //       console.log("log client error" + error);
  //       throw new Error(
  //         "There was an error updating the project. Please try again."
  //       );
  //     });
  // },

  // find(id: number) {
  //   return fetch(`${baseUrl}/`).then(parseJSON);
  // },
};

export { projectAPI };
