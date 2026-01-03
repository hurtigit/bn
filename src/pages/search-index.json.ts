export async function GET() {
  const base = import.meta.env.BASE_URL;

  // Get all article files
  const articleFiles = import.meta.glob('../content/articles/*.md', { eager: true });

  const articles = Object.entries(articleFiles).map(([path, article]: [string, any]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    return {
      title: article.frontmatter.title,
      excerpt: article.frontmatter.excerpt || '',
      category: article.frontmatter.category || '',
      date: article.frontmatter.date,
      url: `${base}/artikel/${slug}/`
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return new Response(JSON.stringify(articles), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
