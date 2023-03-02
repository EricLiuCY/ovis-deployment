import { Theme } from '../../../types';
import { sanityFetch } from '../../utils/sanity/client';
import ThemeGROQ from '../fragments/theme';

const fetchHomePage = async (lang: string) : Promise<Theme> => {
  const data = await sanityFetch(ThemeGROQ, lang)
  return data
}

export default fetchHomePage;
