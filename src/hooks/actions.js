import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { searchActions } from "../store/search/seach.slice";
import { userActions } from "../store/users/users.slice";
import { historyActions } from "../store/history/history.slice";
import { statisticsActions } from "../store/statistics/statistics";
import { popupActions } from "../store/popup/popup.slice";
import { loginActions } from "../store/login/login.slice";

const actions = {
  ...userActions,
  ...searchActions,
  ...historyActions,
  ...statisticsActions,
  ...popupActions,
  ...loginActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
