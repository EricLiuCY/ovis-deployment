import { Homepage } from '../../../types';
import sanityFetch from '../../utils/sanity/initClient';
import HomepageGROQ from '../fragments/homepage';

const fetchHomePage = async (lang: string) : Promise<Homepage> => {
  const data = await sanityFetch(HomepageGROQ, lang)
  return data
}

export default fetchHomePage;
