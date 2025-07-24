import { Injectable } from '@nestjs/common'

@Injectable()
export class PostService {
  getPosts() {
    return 'This action returns all posts'
  }

  createPost(body: any) {
    return `This action creates a post with the following data: ${JSON.stringify(body)}`
  }

  getPost(id: string) {
    return `This action returns a post with id: ${id}`
  }

  updatePost(id: string, body: any) {
    return `This action updates a post with id: ${id} with new data: ${JSON.stringify(body)}`
  }

  deletePost(id: string) {
    return `This action deletes a post with id: ${id}`
  }
}
