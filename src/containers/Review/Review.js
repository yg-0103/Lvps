import { Paragraph, Carousel, Icon } from 'components/';
import styled from 'styled-components';
import theme from 'theme/theme';
import Layout from 'pages/Layout/Layout';

const { colors, calcRem, calcInterval } = theme;

const reviews = [
  {
    id: 1,
    name: 'ADEL GHQYEM',
    model: 'Mercedes Benz GLC300',
    review:
      'After buying my brand new car I wanted to protect it. I inquired with LVPS about Ceramic Coating. I got offered with a Ceramic Pro Silver package! I am very happy with the end results. My car looks like new after every car wash. Will definitely recommend LVPS services to everyone!'
  },
  {
    id: 2,
    name: 'Andy',
    model: 'Honda',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dicta dolores minima cumque qui vitae totam! Aliquid ut in facere obcaecati incidunt illo eum, laudantium animi corrupti, iste itaque dicta?'
  },
  {
    id: 3,
    name: 'Breanna',
    model: 'Toyota',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempore vero dolorum, culpa provident exercitationem similique possimus ab ad corrupti!'
  },
  {
    id: 4,
    name: 'Conrad',
    model: 'Ford',
    review:
      'Aut corrupti quod ipsum exercitationem natus non dolore nam voluptas laborum voluptatem numquam necessitatibus hic commodi pariatur, inventore optio libero delectus! Non, corrupti similique odio expedita saepe dolore! Iusto reprehenderit, ea magnam necessitatibus doloremque provident accusantium enim incidunt ratione rerum repellendus facilis?'
  },
  {
    id: 5,
    name: 'Eavan',
    model: 'Chevrolet',
    review:
      'Incidunt facilis dolorum commodi consequatur quia iste? Fuga minima consectetur odit doloribus temporibus tempora quidem modi quaerat perferendis praesentium magnam, impedit dolorem velit qui nostrum! Quis asperiores consectetur tempora temporibus, similique assumenda exercitationem architecto quod ipsum!'
  }
];

const ReviewWrapper = styled.section`
  background: url('assets/dummy_background.png') no-repeat;
  background-size: cover;
  background-position: center;
  padding: ${calcInterval([140, 200])};
  height: ${calcRem(1080)};
`;

const ReviewTitleWrapper = styled(Layout.FlexContainer)`
  margin-bottom: ${calcRem(100)};

  div + div {
    margin-left: ${calcRem(25)};
  }
`;

const Review = ({ children }) => {
  return <ReviewWrapper>{children}</ReviewWrapper>;
};

Review.Title = () => {
  return (
    <ReviewTitleWrapper justify="flex-start">
      <Paragraph
        headingNum={2}
        size={24}
        type="title"
        title="Customer Reviews"
        colors={{ main: colors.white, sub: colors.redMain }}
      >
        Our customers value &amp; trust us with their vehicles.
      </Paragraph>
      {/* TODO: 아이콘 이상하게뜸 */}
      <Icon type="like" />
    </ReviewTitleWrapper>
  );
};

Review.Contents = () => {
  return <Carousel contents={reviews} />;
};

ReviewWrapper.displayName = 'ReviewWrapper';
ReviewTitleWrapper.displayName = 'ReviewTitleWrapper';
Review.Title.displayName = 'Review-Title';
Review.Contents.displayName = 'Review-Contents';

export default Review;
