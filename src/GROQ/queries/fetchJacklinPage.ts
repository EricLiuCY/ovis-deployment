import { JacklinPage } from '../../../types';
import { sanityFetch } from '../../utils/sanity/client';
import JacklinPageGROQ from '../fragments/jacklinPage';

const fetchJacklinPage = async (lang: string) : Promise<JacklinPage> => {
  const data = await sanityFetch(JacklinPageGROQ, lang)
  return data
}

export default fetchJacklinPage;
