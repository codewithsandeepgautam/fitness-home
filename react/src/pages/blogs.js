import React, {useContext} from 'react'
import Blogs from '../components/home/blogs';
import InnerPageBanner from '../components/shared/imagePageBanner';
import blogBanner from "../assets/images/blog-banner.png"
import { AccountContext } from '../utils/accountContext';
function Blog() {
    const { pData } = useContext(AccountContext);
    console.log("pdata<<",pData);
    return (
        <div>
            <InnerPageBanner img={blogBanner} heading="Blogs" desc="Gym plays a vital role in promoting an active and healthy lifestyle." />
            <Blogs/>
        </div>
    )
}

export default Blog