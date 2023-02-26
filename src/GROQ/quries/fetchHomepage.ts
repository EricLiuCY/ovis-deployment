import { getClient } from '../../utils/sanity/initClient';
import HomepageGROQ from '../fragments/homepage';

const fetchHomePage = async () : Promise<any> => {
  const data = await getClient().fetch(
    HomepageGROQ
  )
  return data
}

export default fetchHomePage;
