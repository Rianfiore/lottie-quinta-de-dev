import heartLike from './heart-like.json';
import partyTime from './party-time.json';
import readBook from './read-book.json';
import throwBall from './throw-ball.json';

export function getLottieAnimationByName() {
  return {
    'read-book': readBook,
    'throw-ball': throwBall,
    'party-time': partyTime,
    'heart-like': heartLike
  };
}