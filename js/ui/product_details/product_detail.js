import {
  linkLogo,
  cartImg,
  renderFooter,
  renderNavbarForUser,
  renderNavbarForAll,
  renderProductDetail,
} from "../shared/shared.js";

import { setLoading } from "../shared/shared.js";

/*-----------------------------------------------------------------------*/

auth.onAuthStateChanged((user) => {
  if (user) {
    renderNavbarForUser();
  } else {
    renderNavbarForAll();
  }
  renderProductDetail();
  renderFooter();
});
