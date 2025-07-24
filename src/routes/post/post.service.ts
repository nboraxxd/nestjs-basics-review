import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/shared/services/prisma.service'

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  getPosts() {
    return this.prismaService.post.findMany()
  }

  createPost(body: any) {
    return this.prismaService.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: 1, // Assuming a static authorId for simplicity
      },
    })
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
