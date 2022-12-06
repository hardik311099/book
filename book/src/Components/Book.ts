export class Books {
  id: number | undefined;
  username: string = "";
  email: string = "";
  password: string = "";
  bookname: string = "";
  authore: string = "";
  images: string[] = [];
  categoryId: number | undefined;
  price: number | undefined;
  category: string = "";

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.username) this.username = initializer.username;

    if (initializer.images) this.images = initializer.images;
    if (initializer.email) this.email = initializer.email;
    if (initializer.password) this.password = initializer.password;
    if (initializer.authore) this.authore = initializer.authore;
    if (initializer.categoryId) this.categoryId = initializer.categoryId;
    if (initializer.price) this.price = initializer.price;
    if (initializer.category) this.category = initializer.category;
  }
}
