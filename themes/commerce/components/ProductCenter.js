import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import ProductCard from './ProductCard'
import ProductCategories from './ProductCategories'

/**
 * 产品中心
 * @param {*} props
 * @returns
 */
export default function ProductCenter(props) {
  const { allNavPages } = props
  const posts = allNavPages.slice(
    0,
    parseInt(siteConfig('COMMERCE_HOME_POSTS_COUNT', 9))
  )
  const COMMERCE_TEXT_CENTER_TITLE = siteConfig(
    'COMMERCE_TEXT_CENTER_TITLE',
    'Product Center',
    CONFIG
  )
  return (
    <div className='w-full my-4 mx-4'>
      <div className='w-full text-center text-4xl font-bold'>
        {COMMERCE_TEXT_CENTER_TITLE}
      </div>
      {siteConfig('COMMERCE_TEXT_CENTER_DESCRIPTION') && (
        <div className='w-full text-center text-lg my-3 text-gray-500'>
          {siteConfig('COMMERCE_TEXT_CENTER_DESCRIPTION')}
        </div>
      )}

      <div className='flex'>
        <ProductCategories {...props} />

        <div className='w-full p-4 mx-2'>
          {/* 文章列表 */}
          <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
            {posts?.map(post => (
              <ProductCard
                index={posts.indexOf(post)}
                key={post.id}
                post={post}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
