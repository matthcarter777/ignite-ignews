import { render, screen } from '@testing-library/react';
import { mocked } from 'jest-mock';
import Posts, { getStaticProps } from '../../pages/posts';
import getPrismicClient from '../../services/prismic';


const posts = [
  { slug: 'my-new-post', title: 'My New Post', excerpt: 'Post excerpt', updatedAt: '10 de abril'}
];

jest.mock('../../services/prismic');

describe('Posts page', () => {
  it('renders correctly', () => {
    render(<Posts posts={posts}/>)

    expect(screen.getByText("My New Post")).toBeInTheDocument()
  })

  /* it('loads initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockResolvedValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'my-new-post', 
            data: {
              title: '',
              content: '',
            },
            last_publication_date: '04-01-2021'
          },
        ]
      })
    } as any)
    
    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$10.00'
          }
        }
      })
    )
  }) */
})