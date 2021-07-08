import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

import * as heroStyles from "../components/hero.module.css";

function BlogPostTemplate(props) {
  console.log("these are the props", props);
  const data = props.data;
  const post = data.contentfulBlogPost;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location}>
      <div style={{ background: "#fff" }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className={heroStyles.hero}>
          <GatsbyImage
            image={post.gatsbyImageData}
            className={heroStyles.heroImage}
            alt={post.title}
          />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: "block",
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
