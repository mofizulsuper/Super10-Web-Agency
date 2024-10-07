import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Define the article structure
interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage?: string; // Optional property
}

// Styled-components for Blog Section
const BlogContainer = styled.section`
  padding: 60px 40px;
  background-color: #f9f9f9;
  text-align: center;
`;

const BlogTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const BlogDescription = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 40px;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const BlogPostTitle = styled.h3`
  font-size: 1.5em;
  margin: 0 0 10px;
  color: #6a11cb;
`;

const BlogPostDescription = styled.p`
  font-size: 1em;
  color: #555;
  margin: 0 0 15px;
`;

const BlogReadMore = styled.a`
  display: inline-block;
  color: #6a11cb;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Helper function to limit the number of words
const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + "..."
        : text;
};

// Blog Component
const Blog = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // Allow both null and string for error

    useEffect(() => {
        const fetchArticles = async () => {
            const apiKey = "41b87d97ec8f41358f04939ff75a3b1f"; // Your NewsAPI key
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch articles");
                }
                const data = await response.json();
                setArticles(data.articles.slice(0, 3)); // Limit to 3 articles
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message); // Set the error message
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) return <p>Loading articles...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <BlogContainer>
            <BlogTitle>Our Insights</BlogTitle>
            <BlogDescription>
                Stay updated with the latest trends and tips in web development and design.
            </BlogDescription>

            <BlogGrid>
                {articles.map((article, index) => (
                    <BlogCard key={index}>
                        {article.urlToImage && <BlogImage src={article.urlToImage} alt={article.title} />}
                        <BlogPostTitle>{truncateText(article.title, 5)}</BlogPostTitle> {/* Limit title to 5 words */}
                        <BlogPostDescription>{truncateText(article.description, 20)}</BlogPostDescription> {/* Limit description to 20 words */}
                        <BlogReadMore href={article.url} target="_blank" rel="noopener noreferrer">
                            Read More
                        </BlogReadMore>
                    </BlogCard>
                ))}
            </BlogGrid>
        </BlogContainer>
    );
};

export default Blog;
