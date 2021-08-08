import { Models } from "./database/models";
import { Queries } from "./database/queries";
import { BlogsRoutes } from "./routes/blogs";


class Index {
  models: Models;
  blogs: BlogsRoutes;
  queries: Queries;


  constructor() {
    this.models = new Models;
    this.queries = new Queries;
    this.blogs = new BlogsRoutes(this.queries);
  }

  async runDB(): Promise<void> {
    await this.models.createBlogTable()
  }

  async runBlogsRoutes(): Promise<void> {
    await this.blogs.index();
    await this.blogs.blog();
  }
}
const index = new Index()

index.runDB()
index.runBlogsRoutes()
