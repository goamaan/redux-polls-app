import { getInitialData } from '../utils/api';
import { receivePolls } from '../actions/polls';
import { receiveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, polls }) => {
      dispatch(receivePolls(polls));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
