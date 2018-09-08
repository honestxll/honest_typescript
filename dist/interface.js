"use strict";
/**
 * TypeScript Interface
 */
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Unpublished"] = 0] = "Unpublished";
    PostStatus[PostStatus["Published"] = 1] = "Published";
    PostStatus[PostStatus["Draft"] = 2] = "Draft";
})(PostStatus || (PostStatus = {}));
var post = {
    title: 'One Day',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta eveniet delectus alias facilis, eos recusandae facere architecto dicta maiores, voluptatem dolores, autem. Sequi iste, hic voluptates quibusdam labore vero doloremque.',
    status: PostStatus.Unpublished,
};
