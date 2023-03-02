import { AboutUsPage } from '../../../types';
import { sanityFetch } from '../../utils/sanity/client';
import aboutUsPageGroq from '../fragments/aboutUsPage';

const fetchAboutUsPage = async (lang: string) : Promise<AboutUsPage> => {
  const data = await sanityFetch(aboutUsPageGroq, lang)
  return data
}

export default fetchAboutUsPage;
