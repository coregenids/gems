import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogListMain from "../components/UI/BlogListMain";

const Blog = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogListMain />
            {/* <BlogList /> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
