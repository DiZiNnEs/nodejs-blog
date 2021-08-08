import { Models } from "./database/models";
import { Queries } from "./database/queries";
import { BlogsRoutes } from "./routes/blogs";
import { Admin } from "./routes/admin";
import { APP, PORT } from "./config";


class Index {
  models: Models;
  blogs: BlogsRoutes;
  queries: Queries;
  admin: Admin;

  constructor() {
    this.queries = new Queries;
    this.models = new Models;
    this.blogs = new BlogsRoutes(this.queries);
    this.admin = new Admin();
  }

  async runDB(): Promise<void> {
    await this.models.createBlogTable()
  }

  async runBlogsRoutes(): Promise<void> {
    await this.blogs.index();
    await this.blogs.blog();
  }

  async runAdmin(): Promise<void> {
    await this.admin.admin()
  }
}
const index = new Index()

index.runDB()
index.runBlogsRoutes()
index.runAdmin()

APP.listen(PORT, () => console.log(`App has been started on port: ${PORT} | http://localhost:${PORT}`))
