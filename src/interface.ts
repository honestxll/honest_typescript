/**
 * TypeScript Interface
 */

enum PostStatus {
  Unpublished,
  Published,
  Draft,
}

interface Post {
  title: string;
  content: string;
  author?: string; // 可以不给
  status: PostStatus;
}

let post: Post = {
  title: 'One Day',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta eveniet delectus alias facilis, eos recusandae facere architecto dicta maiores, voluptatem dolores, autem. Sequi iste, hic voluptates quibusdam labore vero doloremque.',
  status: PostStatus.Unpublished,
}
