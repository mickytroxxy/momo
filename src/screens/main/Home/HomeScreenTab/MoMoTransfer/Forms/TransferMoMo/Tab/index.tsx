import Favorites from './Favorites';
import NewRecipient from './NewRecipient';

export const momoTransderTabData = [
  {
    title: 'New recipient',
    renderScene: () => <NewRecipient />,
  },
  {
    title: 'Favorites',
    renderScene: () => <Favorites />,
  },
];
