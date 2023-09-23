import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Loader } from 'components';
import avatarPlaceholder from 'images/avatar_placeholder.jpg';

import {
  ReviewsList,
  ReviewsListItem,
  UserInfoWrapper,
  UserInfo,
  UserReview,
  UserAvatar,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(movieData => {
        setReviews(movieData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ author, author_details, id, content }) => (
            <ReviewsListItem key={id}>
              <UserInfoWrapper>
                <UserAvatar
                  src={author_details['avatar_path'] || avatarPlaceholder}
                  alt={
                    author_details['avatar_path']
                      ? "{author}'s avatar"
                      : 'Placeholder'
                  }
                />
                <UserInfo>@{author_details['username']}</UserInfo>
                <UserInfo>{author}</UserInfo>
              </UserInfoWrapper>
              <UserReview>{content}</UserReview>
            </ReviewsListItem>
          ))}
        </ReviewsList>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
