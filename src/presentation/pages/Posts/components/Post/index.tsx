const fetchList = async (id: number) => {
  const res = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`);
  // await new Promise(resolve => setTimeout(resolve, 2000));
  return res.json();
};

const Post = async ({ id }: { id: number }) => {
  const response = await fetchList(id);

  return (
    <div key={response.blog.id}>
      {/* <img src={response.blog.photo_url} /> */}
      <p>{response.blog.description}</p>
    </div>
  );
};

export default Post;
