import '../index.js';
import { themeShowcaseClasses, decorator } from '~/theme';
import './stories.css';
import '@divriots/dockit-core/showcases';

export default decorator;

export const colors = () => {
  const { colorClasses } = themeShowcaseClasses;
  return /*html*/ `<dockit-showcases
      component-class="box"
      showcase-classes="${colorClasses.map((cls) => cls.class).join(' ')}"
    ></dockit-showcases>
  `;
};
