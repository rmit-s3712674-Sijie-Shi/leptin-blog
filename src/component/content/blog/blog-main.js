import React from "react";
import styles from "./blog-main.module.css"
import Header from "../../header/header";
import BlogListCard from "./blog-list/blog-list-card";

const BlogMain = () => {
    return(
        <>
        <Header menuSections={["Home", "Blog", "Galary", "Contact"]}/>
        <div className={styles.blogList}>
            <BlogListCard/>
        </div>
        </>
    )
}

export default BlogMain;