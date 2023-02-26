import { Homepage } from '../../../types';
import { getClient } from '../../utils/sanity/initClient';
import HomepageGROQ from '../fragments/homepage';

const fetchHomePage = async () : Promise<Homepage> => {
  const data = await getClient().fetch(
    HomepageGROQ
  )
  return data
}

export default fetchHomePage;
