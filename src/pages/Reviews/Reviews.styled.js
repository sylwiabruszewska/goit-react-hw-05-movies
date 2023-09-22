import styled from 'styled-components';

export const UserAvatar = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const ReviewsList = styled.ul`
  list-style-type: none;
  padding: 20px;
`;

export const ReviewsListItem = styled.li`
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const UserInfo = styled.p`
  margin: 4px 0;
`;

export const UserReview = styled.p`
  margin: 0;
  flex: 5;
  padding-left: 20px;
  border-left: 1px solid black;
`;
